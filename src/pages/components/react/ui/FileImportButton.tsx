type FileImportButtonProps = {
  inputId: string;
  accept?: string;
};

export default function FileImportButton({
  inputId,
  accept,
}: FileImportButtonProps) {
  return (
    <>
      <label
        htmlFor={inputId}
        className="inline-flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
      >
        ファイルを選択
      </label>

      <input id={inputId} type="file" accept={accept} className="hidden" />
    </>
  );
}
