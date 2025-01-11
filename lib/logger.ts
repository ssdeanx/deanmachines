import winston from "winston";
// eslint-disable-next-line import/order
import { format } from "winston";
import "winston-daily-rotate-file";

// Define log levels with extended options
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
  trace: 5,
  performance: 6,
};

// Define log colors with additional options
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
  trace: "gray",
  performance: "blue",
};

// Add colors to Winston
winston.addColors(colors);

// Define log format with enhanced features
import { TransformableInfo } from "logform";

interface LogInfo extends TransformableInfo {
  timestamp?: string;
  stack?: string;
  metadata?: Record<string, any>;
}

const logFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.metadata({ fillExcept: ["message", "level", "timestamp"] }),
  format.errors({ stack: true }),
  format.colorize({ all: true }),
  format.printf((info: LogInfo) => {
    const metadata =
      info.metadata && Object.keys(info.metadata).length
        ? `\nMetadata: ${JSON.stringify(info.metadata, null, 2)}`
        : "";
    const stack = info.stack ? `\nStack: ${info.stack}` : "";

    return `${info.timestamp} ${info.level}: ${info.message}${metadata}${stack}`;
  }),
);

// File transport with rotation
const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "logs/application-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxSize: "20m",
  maxFiles: "14d",
  format: format.combine(format.uncolorize(), format.json()),
});

// Create the logger with enhanced configuration
const logger = winston.createLogger({
  levels,
  format: logFormat,
  transports: [
    new winston.transports.Console(),
    fileRotateTransport,
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: format.combine(format.uncolorize(), format.json()),
    }),
  ],
});

// Performance monitoring
const startTimer = () => {
  const start = process.hrtime();

  return {
    end: (operation: string) => {
      const diff = process.hrtime(start);
      const duration = (diff[0] * 1e9 + diff[1]) / 1e6; // Convert to milliseconds

      logger.log("performance", `${operation} took ${duration}ms`);
    },
  };
};

// Request tracking
interface RequestLogInfo {
  message: string;
  metadata?: any;
}

class Logger {
  private requestId?: string;
  private userId?: string;

  constructor(requestId?: string, userId?: string) {
    this.requestId = requestId;
    this.userId = userId;
  }

  private formatMessage(info: RequestLogInfo): string {
    return JSON.stringify({
      ...info,
      requestId: this.requestId,
      userId: this.userId,
      timestamp: new Date().toISOString(),
    });
  }

  error(message: string, metadata?: any): void {
    logger.error(this.formatMessage({ message, ...metadata }));
  }

  warn(message: string, metadata?: any): void {
    logger.warn(this.formatMessage({ message, ...metadata }));
  }

  info(message: string, metadata?: any): void {
    logger.info(this.formatMessage({ message, ...metadata }));
  }

  http(message: string, metadata?: any): void {
    logger.http(this.formatMessage({ message, ...metadata }));
  }

  debug(message: string, metadata?: any): void {
    logger.debug(this.formatMessage({ message, ...metadata }));
  }

  trace(message: string, metadata?: any): void {
    logger.log("trace", this.formatMessage({ message, ...metadata }));
  }

  performance(_operation: string) {
    return startTimer();
  }

  withRequest(requestId: string, userId?: string): Logger {
    return new Logger(requestId, userId);
  }
}

// Create default logger instance
const defaultLogger = new Logger();

// Development check
if (process.env.NODE_ENV !== "production") {
  logger.debug("Logging initialized at debug level");
}

export { Logger, defaultLogger as logger };
