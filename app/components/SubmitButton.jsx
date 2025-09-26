"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn-primary" disabled={pending}>
      <span>{pending ? "Submitting..." : "Submit"}</span>
    </button>
  );
};

export default SubmitButton;
