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
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">Resume Download Options</h1>
            <p className="max-w-2xl text-base text-black mt-2">
              Select your preferred format for instant, offline-ready access.
            </p>
        </div>

        {/* Preview Card */}
          {/* Removed preview card for minimal professional look */}

        {/* Download Options */}
        <Card className="bg-white border border-black/10 shadow-none">
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl text-black font-bold tracking-wide flex items-center gap-2">
              <Download className="h-5 w-5 text-black" /> Resume Download Options
            </CardTitle>
            <CardDescription className="text-black">Select your preferred format for instant, offline-ready access.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-black flex items-center gap-2"><Download className="h-4 w-4 text-black" /> DOCX <span className="text-xs text-black/70">(Recommended)</span></p>
              <p className="text-sm text-black">Professional Word document with structured layout and modern styling.</p>
              <a
                href="/resume.docx"
                download
                className="text-xs text-black underline hover:text-black/80 mt-1"
                style={{ display: 'inline-block' }}
              >
                Static Download (if dynamic fails)
              </a>
            </div>
            <Button variant="default" className="gap-2 px-6 py-3 text-base font-semibold border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 shadow-none" onClick={handleDownloadDoc}>
              <Download className="h-5 w-5" aria-hidden="true" />
              Download DOCX
            </Button>
          </CardContent>
          <Separator className="bg-black/10" />
          <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-black flex items-center gap-2"><Download className="h-4 w-4 text-black" /> Plain Text</p>
              <p className="text-sm text-black">Minimal, ATS-friendly format for easy copy-paste into job portals.</p>
            </div>
            <Button variant="secondary" className="gap-2 px-6 py-3 text-base font-semibold border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 shadow-none" onClick={handleDownloadTxt}>
              <Download className="h-5 w-5" aria-hidden="true" />
              Download TXT
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
