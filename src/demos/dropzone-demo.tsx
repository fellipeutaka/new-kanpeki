"use client";

import { ImageIcon, ImageUpIcon, UploadIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { FileTrigger } from "react-aria-components";
import { toast } from "sonner";
import { Button, ButtonPrimitive } from "~/components/ui/button";
import { Dropzone } from "~/components/ui/dropzone";

export function DropzoneDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <Basic />
      <WithFileTrigger />
      <Clickable />
    </div>
  );
}

function Basic() {
  return (
    <Dropzone.Provider
      onDrop={(e) => {
        const items = e.items.filter((file) => file.kind !== "text");

        toast.info(
          `Dropped items: ${items.map((item) => item.name).join(", ")}`
        );
      }}
    >
      <Dropzone.Root className="min-h-32 w-96">
        <div className="flex items-center gap-2">
          <UploadIcon className="size-4" />
          <Dropzone.Label>Upload files</Dropzone.Label>
        </div>
      </Dropzone.Root>
    </Dropzone.Provider>
  );
}

const maxSizeMB = 5;
const acceptedFileTypes = [
  "image/svg+xml",
  "image/png",
  "image/jpeg",
  "image/gif",
];
function WithFileTrigger() {
  const [file, setFile] = useState<File | null>();
  const previewUrl = file ? URL.createObjectURL(file) : null;

  return (
    <Dropzone.Provider
      onDrop={async (e) => {
        const file = await e.items
          .find((item) => item.kind === "file")
          ?.getFile();

        if (!file) {
          setFile(null);
          return;
        }

        if (file.size > maxSizeMB * 1024 * 1024) {
          toast.error(
            `File size exceeds ${maxSizeMB}MB. Please select a smaller file.`
          );
          return;
        }

        if (!acceptedFileTypes.includes(file.type)) {
          toast.error(
            "Unsupported file type. Please upload an image (SVG, PNG, JPG, GIF)."
          );
          return;
        }

        setFile(file);
      }}
    >
      <Dropzone.Root className="min-h-52 w-96 text-center">
        {previewUrl ? (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img
              src={previewUrl}
              alt={file?.name || "Uploaded image"}
              className="mx-auto max-h-full rounded object-contain"
            />
          </div>
        ) : (
          <div className="space-y-2">
            <div
              className="flex size-11 shrink-0 items-center justify-center justify-self-center rounded-full border bg-background"
              aria-hidden="true"
            >
              <ImageIcon className="size-4 opacity-60" />
            </div>
            <Dropzone.Label>Drop your image here</Dropzone.Label>
            <p className="text-muted-foreground text-xs">
              SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)
            </p>
            <FileTrigger
              acceptedFileTypes={acceptedFileTypes}
              onSelect={(e) => {
                const file = e?.item(0);

                if (file && file.size > maxSizeMB * 1024 * 1024) {
                  toast.error(
                    `File size exceeds ${maxSizeMB}MB. Please select a smaller file.`
                  );
                  return;
                }

                setFile(file);
              }}
            >
              <Button variant="outline" className="mt-2">
                <UploadIcon
                  className="-ms-1 size-4 opacity-60"
                  aria-hidden="true"
                />
                Select image
              </Button>
            </FileTrigger>
          </div>
        )}

        {previewUrl && (
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              className="size-8 rounded-full"
              onClick={() => setFile(null)}
              aria-label="Remove image"
            >
              <XIcon aria-hidden="true" />
            </Button>
          </div>
        )}
      </Dropzone.Root>
    </Dropzone.Provider>
  );
}

function Clickable() {
  const [file, setFile] = useState<File | null>();
  const previewUrl = file ? URL.createObjectURL(file) : null;

  return (
    <Dropzone.Provider
      onDrop={async (e) => {
        const file = await e.items
          .find((item) => item.kind === "file")
          ?.getFile();

        if (!file) {
          setFile(null);
          return;
        }

        if (file.size > maxSizeMB * 1024 * 1024) {
          toast.error(
            `File size exceeds ${maxSizeMB}MB. Please select a smaller file.`
          );
          return;
        }

        if (!acceptedFileTypes.includes(file.type)) {
          toast.error(
            "Unsupported file type. Please upload an image (SVG, PNG, JPG, GIF)."
          );
          return;
        }

        setFile(file);
      }}
    >
      <FileTrigger
        acceptedFileTypes={acceptedFileTypes}
        onSelect={(e) => {
          const file = e?.item(0);

          if (file && file.size > maxSizeMB * 1024 * 1024) {
            toast.error(
              `File size exceeds ${maxSizeMB}MB. Please select a smaller file.`
            );
            return;
          }

          setFile(file);
        }}
      >
        <ButtonPrimitive>
          <Dropzone.Root className="min-h-52 w-96 text-center">
            {previewUrl ? (
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img
                  src={previewUrl}
                  alt={file?.name || "Uploaded image"}
                  className="mx-auto max-h-full rounded object-contain"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <div
                  className="flex size-11 shrink-0 items-center justify-center justify-self-center rounded-full border bg-background"
                  aria-hidden="true"
                >
                  <ImageUpIcon className="size-4 opacity-60" />
                </div>
                <Dropzone.Label>
                  Drop your image here or click to browse
                </Dropzone.Label>
                <p className="text-muted-foreground text-xs">
                  Max size: {maxSizeMB}MB
                </p>
              </div>
            )}
          </Dropzone.Root>
        </ButtonPrimitive>
      </FileTrigger>

      {previewUrl && (
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-full"
            onClick={() => setFile(null)}
            aria-label="Remove image"
          >
            <XIcon aria-hidden="true" />
          </Button>
        </div>
      )}
    </Dropzone.Provider>
  );
}
