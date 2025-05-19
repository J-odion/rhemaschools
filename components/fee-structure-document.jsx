"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"

export default function FeeStructureDocument() {
  const documentRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePrint = () => {
    if (documentRef.current) {
      window.print()
    }
  }

  const handleDownload = () => {
    setIsLoading(true)

    try {
      // Create a simple HTML document as a Blob
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>RHEMA School Fee Structure</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 40px;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
              }
              .header h1 {
                color: #2563eb;
                font-size: 24px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 30px;
              }
              th {
                background-color: #2563eb;
                color: white;
                padding: 10px;
                text-align: left;
                border: 1px solid #2563eb;
              }
              td {
                padding: 10px;
                border: 1px solid #ddd;
              }
              tr:nth-child(even) {
                background-color: #f8fafc;
              }
              .mission {
                background-color: #eff6ff;
                padding: 20px;
                border-radius: 8px;
                text-align: center;
                margin: 30px 0;
                font-style: italic;
                color: #1e40af;
              }
              .footer {
                text-align: center;
                margin-top: 40px;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM</h1>
              <h2>ANNUAL TUITION FEES 2023/2024</h2>
            </div>
            
            ${documentRef.current ? documentRef.current.innerHTML : ""}
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM</p>
              <p>Congo Town, Monrovia, Liberia</p>
            </div>
          </body>
        </html>
      `

      // Create a Blob from the HTML content
      const blob = new Blob([htmlContent], { type: "text/html" })

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob)

      // Create a link element
      const link = document.createElement("a")
      link.href = url
      link.download = "RHEMA-School-Fee-Structure-2023-2024.html"

      // Append to the document, click it, and remove it
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Release the URL object
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading document:", error)
      alert("There was an error generating the document. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-end gap-4 mb-4 print:hidden">
        <Button
          className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          onClick={handleDownload}
          disabled={isLoading}
        >
          <Download className="h-4 w-4" />
          {isLoading ? "Downloading..." : "Download PDF"}
        </Button>
      </div>

      <div ref={documentRef} className="bg-white border rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        {/* Header */}
        {/* <div className="flex flex-col items-center mb-8 border-b pb-6">
          <div className="relative h-24 w-64 mb-4">
            <Image src="/logo.png" alt="RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM" fill className="object-contain" />
          </div>
          <h1 className="text-3xl font-medium text-blue-600 text-center">ANNUAL TUITION FEES 2023/2024</h1>
        </div> */}

        {/* Fee Table */}
        <div className="overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-blue-500 px-4 py-3 text-left">CLASS</th>
                <th className="border border-blue-500 px-4 py-3 text-left">DESCRIPTION</th>
                <th className="border border-blue-500 px-4 py-3 text-center">AMOUNT PAYABLE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-blue-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">12</td>
                <td className="border border-gray-200 px-4 py-3">
                  Scool Fees, (Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear), Graduation,
                  Maintenance Fee, End Of Year Party, Development Levy, Notebooks, Neco Fee, Wassce Fee, Neco & Wassce
                  Lesson, PTF(termly), ICT
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">$9,550</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="border border-gray-200 px-4 py-3 font-medium">11</td>
                <td className="border border-gray-200 px-4 py-3">
                  (Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear), Texbooks, Maintenance Fee,
                  End Of Year Party, Development Levy, PTF(termly), ICT
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">$9,250</td>
              </tr>
              <tr className="bg-white hover:bg-blue-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">10</td>
                <td className="border border-gray-200 px-4 py-3">
                  (Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear), Texbooks, Maintenance Fee,
                  End Of Year Party, Development Levy, PTF(termly), ICT
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">$8,850</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="border border-gray-200 px-4 py-3 font-medium">9</td>
                <td className="border border-gray-200 px-4 py-3">
                  (Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear) Texbooks, Maintenance Fee, End
                  Of The Year Party, Development Levy, PTF(termly), Diction, ICT
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">$8,850</td>
              </tr>
              <tr className="bg-white hover:bg-blue-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">8</td>
                <td className="border border-gray-200 px-4 py-3">
                  (Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear) Texbooks, Maintenance Fee, End
                  Of The Year Party, Development Levy, PTF(termly), Diction, ICT
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">$8,250</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="border border-gray-200 px-4 py-3 font-medium">7</td>
                <td className="border border-gray-200 px-4 py-3">
                  (Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear, Texbooks, Maintenance Fee, End
                  Of Year Party, Development Levy, PTF(termly), Diction, ICT
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">$7,850</td>
              </tr>
              <tr className="bg-white hover:bg-blue-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Primary 5-6</td>
                <td className="border border-gray-200 px-4 py-3">
                  Primary 5 & 6 : (Tuition, Uniform, Socks, Cardigan, Sportwear, Traditional Wear, ICT) And Textbooks
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">$7,500</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="border border-gray-200 px-4 py-3 font-medium">Primary 1-4</td>
                <td className="border border-gray-200 px-4 py-3">
                  (Tuition, Uniform, Socks, Cardigan, Sportwear, Traditional Wear, ICT) And Textbooks
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">$7,250</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mission Statement */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-center text-blue-800 font-medium italic">
            "RHEMA Primary & Secondary School is God's divine mandate to 'Train Future Leaders in a Godly Way',
            equipping our children for a brighter future."
          </p>
        </div>

        {/* Payment Information */}
        <div className="mt-8">
          <h2 className="text-xl font-medium text-blue-600 mb-4">Payment Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Payment Schedule</h3>
              <p className="text-gray-600">
                Fees can be paid in full or in three installments at the beginning of each term.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Payment Methods</h3>
              <p className="text-gray-600">
                Payments can be made via bank transfer, mobile money, or directly at the school's finance office.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Contact Information</h3>
              <p className="text-gray-600">
                For inquiries regarding fees and payments, please contact our office:
                <br />
                Email: info@rpss.academy
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM</p>
          <p>Congo Town, Monrovia, Liberia</p>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #documentRef, #documentRef * {
            visibility: visible;
          }
          #documentRef {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
