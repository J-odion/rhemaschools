import FeeStructureDocument from "@/components/fee-structure-document"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DownloadFeesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/fees">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Fees
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-2">Fee Structure Document</h1>
          <p className="text-gray-600 mb-4">
            View, print, or download our complete fee structure for the 2023/2024 academic year.
          </p>
          <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
            <h3 className="text-blue-800 font-medium mb-2">Instructions:</h3>
            <ul className="list-disc pl-5 text-blue-700 space-y-1">
              <li>
                Click the <strong>Print</strong> button to print the document directly.
              </li>
              <li>
                Click the <strong>Download PDF</strong> button to generate a downloadable version.
              </li>
              <li>The document will open in a new tab where you can save or print it.</li>
            </ul>
          </div>
        </div>

        <FeeStructureDocument />
      </div>
    </div>
  )
}
