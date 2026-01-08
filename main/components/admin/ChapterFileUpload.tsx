"use client";

import { useState } from "react";
import { UploadCloud, X, Link, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import docx from "@/assets/images/DOCX.svg";
import jpg from "@/assets/images/JPG.svg";
import pdf from "@/assets/images/PDF.svg";
import png from "@/assets/images/PNG.svg";
import ppt from "@/assets/images/PPT.svg";
import txt from "@/assets/images/TXT.svg";
import mp4 from "@/assets/images/MP4.svg";
import zip from "@/assets/images/ZIP.svg";
import markdown from "@/assets/images/image.png";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
}

const MOCK_FILES: UploadedFile[] = [
  {
    id: "1",
    name: "cpp_toolchain_setup_guide",
    size: "2.4 MB",
    type: "pdf",
  },
];

function getFileIcon(extension: string) {
  switch (extension) {
    case "doc":
    case "docx":
      return docx;
    case "jpg":
      return jpg;
    case "png":
      return png;
    case "pdf":
      return pdf;
    case "mp4":
      return mp4;
    case "ppt":
    case "pptx":
      return ppt;
    case "txt":
      return txt;
    case "zip":
      return zip;
    case "md":
      return markdown;
    default:
      return txt;
  }
}

export default function ChapterFileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>(MOCK_FILES);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState("");

  const handleRemoveFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleRemoveUrl = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const handleAddUrl = () => {
    if (newUrl.trim()) {
      setUrls([...urls, newUrl.trim()]);
      setNewUrl("");
      setShowUrlInput(false);
    }
  };

  const isMaxFiles = files.length >= 5;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="text-lg font-semibold text-neutral-800">
          Content Materials
        </h3>
        <p className="text-sm text-neutral-500">
          {files.length}/5 files • Max 5MB per file
        </p>
      </div>

      <div className="space-y-4">
        <div
          className={`
            border-2 border-dashed rounded-md p-8 text-center transition-colors
            ${
              isMaxFiles
                ? "border-neutral-300 bg-neutral-50 cursor-not-allowed opacity-60"
                : "border-neutral-300 bg-neutral-50 hover:bg-neutral-100 cursor-pointer"
            }
          `}
        >
          <div className="flex flex-col items-center gap-3">
            <UploadCloud
              className={`size-12 ${
                isMaxFiles ? "text-neutral-400" : "text-neutral-500"
              }`}
            />
            <div className="space-y-1">
              <p className="text-sm font-medium text-neutral-800">
                {isMaxFiles
                  ? "Maximum files reached"
                  : "Drag & drop files here"}
              </p>
              <p className="text-sm text-neutral-500">
                {isMaxFiles
                  ? "Remove files to upload more"
                  : "or click to browse"}
              </p>
            </div>
            {!isMaxFiles && (
              <Button type="button" variant="outline" className="mt-2">
                Browse Files
              </Button>
            )}
          </div>
        </div>

        {files.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {files.map((file) => {
              const fileIcon = getFileIcon(file.type);
              return (
                <div
                  key={file.id}
                  className="flex items-center gap-2 p-3 border border-neutral-200 bg-white rounded-md"
                >
                  <Image
                    src={fileIcon}
                    alt={file.type}
                    className="size-5.5 object-contain shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-800 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-neutral-500">{file.size}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(file.id)}
                    className="shrink-0 p-1 hover:bg-neutral-100 rounded-md transition-colors"
                  >
                    <X className="size-4 text-neutral-600" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div className="border-t border-neutral-200 pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">External Links</Label>
            {!showUrlInput && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-sm"
                onClick={() => setShowUrlInput(true)}
              >
                <Plus className="size-4 mr-1" />
                Add Link
              </Button>
            )}
          </div>

          {showUrlInput && (
            <div className="flex gap-2">
              <Input
                type="url"
                placeholder="https://example.com/resource"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                className="flex-1 h-9"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowUrlInput(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleAddUrl}
                className="bg-emerald-500 hover:bg-emerald-500/90"
              >
                Add
              </Button>
            </div>
          )}

          {urls.length > 0 && (
            <div className="space-y-2">
              {urls.map((url, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 border border-neutral-200 bg-white rounded-md"
                >
                  <Link className="size-4 text-neutral-600 shrink-0" />
                  <p className="flex-1 text-sm text-neutral-800 truncate">
                    {url}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleRemoveUrl(index)}
                    className="shrink-0 p-1 hover:bg-neutral-100 rounded-md transition-colors"
                  >
                    <X className="size-4 text-neutral-600" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
