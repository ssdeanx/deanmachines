# Changelog

All notable changes to the DeanMachines project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.3] - 2024-04-29

### Added 0.2.3

- Enhanced logger implementation with advanced features and better error handling
- Added comprehensive utility functions in `utils.ts`
- Created rate limiting functionality with improved error handling
- Added VS Code configuration for better development experience

### Changed 0.2.3

- Updated TypeScript configuration for better type safety
- Improved error handling in API routes
- Enhanced logging capabilities with structured logging
- Updated VS Code settings for optimal development workflow

### Fixed 0.2.3

- Resolved rate limiting implementation issues
- Fixed TypeScript type definitions
- Corrected Tailwind CSS class recognition issues

### Documentation 0.2.3

- Added detailed comments to utility functions
- Improved code documentation standards
- Updated configuration documentation

## [0.2.2] - 2024-04-29

### Big Updates

- Updated the requirements page with content from the README.md file.
- Updated the about page with hardware specifications from the README.md file.
- Updated the IMUDataDisplay component to include a dropdown menu for selecting the data type to display.
- Updated the SensorDataDisplay component to include a prop for the text size and to use consistent Tailwind CSS classes for the text.
- Updated the DroneMap component to include a prop for the zoom level and to use consistent Tailwind CSS classes for the card.
- Created a new component called `FPVVideoDisplay.tsx` which can be used to display a video stream.
- Created a new component called `LidarDataDisplay.tsx` which can be used to display lidar data as a 3D scatter plot.
- Created a new component called `IMUDataDisplay.tsx` which can be used to display IMU data as a 3D scatter plot.
- Created a new component called `FlightDataDisplay.tsx` which can be used to display a summary of the drone's flight data.
- Created API endpoints for `app/data/page.tsx` and `app/requirements/page.tsx`.
- Moved the `FormData`, `DataItem`, and `RequirementItem` interfaces to `types/index.ts`.
- Updated import statements in `app/api/form/route.ts` and `app/api/requirements/route.ts` to use types from `types/index.ts`.
- Ensured all data components are using the correct types from `types/index.ts` for their data props.

## [0.2.1] - 2024-04-28

### Added support for icons

- Added `displayName` to all icon components in `/components/icons.tsx`
- Implemented `React.memo` for all icon components in `/components/icons.tsx`
- Updated `/utils/cosmosDB.ts` to include `ItemResponse` import and proper type for `getItem` function
- Improved error handling in `/app/api/data/route.ts` and updated data fetching logic

### Changed - Refactoring

- Refactored `/components/icons.tsx` to use `memo` from React
- Updated `/app/api/data/route.ts` to use `toArray()` for fetching items from CosmosDB

### Fixed

- Corrected duplicate `displayName` assignment for `SearchIcon` in `/components/icons.tsx`

## [0.2.0] - 2024-04-27

### Added - Features

- Implemented GET endpoint in `/app/api/data/route.ts` to fetch data from CosmosDB

## [0.1.0] - 2024-03-19

### Added rag

- Created comprehensive RAG document (`copilot-instructions.md`) for GitHub Copilot
- Implemented `/app/requirements/layout.tsx` with proper styling and structure
- Added contact form component with validation and error handling
- Set up API route for form submissions with rate limiting
- Created documentation standards for components and API routes

### Changed y

- Updated form handling with better TypeScript types and validation
- Improved error handling in contact form
- Enhanced requirements page layout with better UI components
- Refactored API routes with better error handling

### Fixed new

- Rate limiting implementation in form submission API
- Form validation error messages
- Layout styling issues in requirements page
- TypeScript type definitions for form data

### Security new

- Added rate limiting to form submissions
- Implemented proper form validation
- Added secure headers to API routes

### Documentation ooonce

- Added comprehensive project documentation
- Created documentation standards for components
- Added API route documentation templates
- Updated README with project setup instructions
- Created CHANGELOG.md to track project changes

### Technical Debt

- Need to implement proper testing for form components
- Need to add error boundary components
- Consider adding loading state components
- Implement more comprehensive form validation

### Added - FPV Video Page

- Created a new page for FPV video in the dashboard at `/dashboard/fpv`.
- Added a link to the FPV video page in the dashboard sidebar.
- Created a shared `DashboardSidebar` component and used it in the dashboard, data, and FPV pages.
- Added an input box to the FPV page to allow the user to enter a video URL.
- Added a button to the FPV page to save the video URL.
- Added checkboxes to the FPV page for advanced options for receiving and displaying FPV video in real time.
- Updated the `FPVVideoDisplay` component to use best practices, including a loading state, error handling, and a responsive video element.
- Added security by ensuring the video URL is valid and adding a `referrerPolicy="no-referrer"` attribute to the video element.

[0.2.3]: https://github.com/ssdeanx/deanmachines/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/ssdeanx/deanmachines/releases/tag/v0.2.2
[0.2.1]: https://github.com/ssdeanx/deanmachines/releases/tag/v0.2.1
[0.2.0]: https://github.com/ssdeanx/deanmachines/releases/tag/v0.2.0
## [0.2.4] - 2025-01-18 12:55 PM
### Changed

- Updated styling in `app/` and `components/` for consistency with `globals.css`.
- Replaced inline styles with utility classes where applicable.
- Updated `Link` and `Button` components for better accessibility and styling consistency.
- Created a custom `Code` component for consistent code styling.

[0.1.0]: https://github.com/ssdeanx/deanmachines/releases/tag/v0.1.0

[0.2.4]: https://github.com/ssdeanx/deanmachines/compare/v0.2.3...v0.2.4
