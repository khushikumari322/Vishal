import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { generateResumeDoc } from "@/lib/resumeGenerator";
import { generateResumeTxt } from "@/lib/resumeGeneratorTxt";
import { Download } from "lucide-react";

const Resume = () => {
  const handleDownloadDoc = async () => {
    await generateResumeDoc();
  };

  const handleDownloadTxt = () => {
    generateResumeTxt();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Resume</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Download Vishal&apos;s Resume</h1>
          <p className="max-w-2xl text-base text-slate-600">
            Choose your preferred format. The document version is Word-compatible and keeps layout intact; the text version is
            ATS-friendly and easy to paste into applications.
          </p>
        </div>

        <Card>
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl">Available Formats</CardTitle>
            <CardDescription>Instant, offline-ready downloads generated on the fly.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-slate-900">DOCX (recommended)</p>
              <p className="text-sm text-slate-600">Word-compatible file with structured layout and styling.</p>
            </div>
            <Button variant="default" className="gap-2" onClick={handleDownloadDoc}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download DOCX
            </Button>
          </CardContent>
          <Separator />
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-slate-900">Plain Text</p>
              <p className="text-sm text-slate-600">Lightweight, ATS-friendly version ready to paste.</p>
            </div>
            <Button variant="secondary" className="gap-2" onClick={handleDownloadTxt}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download TXT
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
