"use client";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";

function CopyToClipBoardComponent({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <CopyToClipboard
      text={text}
      onCopy={() =>
        Swal.fire({
          icon: "success",
          text: "Link thread copied",
          showConfirmButton: false,
          timer: 1500,
        })
      }
    >
      {children}
    </CopyToClipboard>
  );
}

export default CopyToClipBoardComponent;
