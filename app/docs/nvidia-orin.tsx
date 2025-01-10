import { title } from "@/components/primitives";

export default function NvidiaOrinDocsPage() {
  return (
    <div>
      <h1 className={title()}>NVIDIA Orin Nano and PyTorch/TensorFlow</h1>
      <p>
        This page provides information about using the NVIDIA Orin Nano with
        PyTorch and TensorFlow.
      </p>
      <h2 className="mt-6 text-xl font-semibold">NVIDIA Orin Nano</h2>
      <p>
        The NVIDIA Orin Nano is a powerful embedded system that can be used for
        various AI and machine learning tasks.
      </p>
      <h2 className="mt-6 text-xl font-semibold">PyTorch</h2>
      <p>
        PyTorch is a popular open-source machine learning framework that can be
        used to develop and train deep learning models on the NVIDIA Orin Nano.
      </p>
      <h2 className="mt-6 text-xl font-semibold">TensorFlow</h2>
      <p>
        TensorFlow is another popular open-source machine learning framework
        that can be used to develop and train deep learning models on the NVIDIA
        Orin Nano.
      </p>
    </div>
  );
}
