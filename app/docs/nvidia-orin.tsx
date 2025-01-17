import { title, subtitle } from "@/components/primitives";
import { ChipIcon } from "@/components/icons";

export default function NvidiaOrinDocsPage() {
  return (
    <div>
      <div className="text-center">
        <h1 className={title({ size: "lg" })}>
          <ChipIcon className="mr-2 inline-block" size={30} />
          NVIDIA Orin Nano and PyTorch/TensorFlow
        </h1>
        <div className={subtitle({ class: "mt-4" })}>
          This page provides information about using the NVIDIA Orin Nano with
          PyTorch and TensorFlow.
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mt-6 text-xl font-semibold">NVIDIA Orin Nano</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The NVIDIA Orin Nano is a powerful embedded system that can be used
          for various AI and machine learning tasks.
        </p>
        <h2 className="mt-6 text-xl font-semibold">PyTorch</h2>
        <p className="text-gray-600 dark:text-gray-400">
          PyTorch is a popular open-source machine learning framework that can
          be used to develop and train deep learning models on the NVIDIA Orin
          Nano.
        </p>
        <h2 className="mt-6 text-xl font-semibold">TensorFlow</h2>
        <p className="text-gray-600 dark:text-gray-400">
          TensorFlow is another popular open-source machine learning framework
          that can be used to develop and train deep learning models on the
          NVIDIA Orin Nano.
        </p>
      </div>
    </div>
  );
}
