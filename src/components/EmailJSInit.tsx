"use client";

import { useEffect } from "react";
import { init } from "@emailjs/browser";

export default function EmailJSInit() {
  useEffect(() => {
    init({
      publicKey: "LLL2MOfk8uNdiaErB",
    });
  }, []);

  return null;
}
