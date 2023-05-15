import { FaSearch, FaFilePdf, FaPrint, FaFileExcel } from "react-icons/fa";

import { fetchCategories } from "../services/api-calls";

import useSWR from "swr";
import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import jsPDF from "jspdf";
import "jspdf-autotable";

const CategoryReport = () => {
  const { data, isLoading } = useSWR("/category", fetchCategories);
  const [query, setQuery] = React.useState("");

  //print pdf file code
  const genaratePDF = () => {
    const doc = new jsPDF();

    doc.autoTable({ html: "#table-to-xls" });

    doc.save("customerReport.pdf");
  };

  ReactHTMLTableToExcel.format = (s, c) => {
    if (c && c["table"]) {
      const html = c.table;
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const rows = doc.querySelectorAll("tr");

      for (const row of rows) row.removeChild(row.firstChild);

      c.table = doc.querySelector("table").outerHTML;
    }

    return s.replace(/{(\w+)}/g, (m, p) => c[p]);
  };
  const filteredCategories = filteredArray(data, query);

  return (
    <div className="flex justify-center bg-gray-100 h-full">
      <div className="flex flex-col w-full bg-white shadow-lg rounded-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-medium text-gray-800">Catoray Report</h2>
          <div className="flex space-x-1">
            <button className="flex items-center justify-center px-4 py-2 text-sm text-white bg-green-500 rounded-md">
              <FaFileExcel className="w-4 h-4 mr-2" />
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="customerReport"
                sheet="tablexls"
                buttonText="Excel"
              />
            </button>

            <button className="flex items-center justify-center px-4 py-2 text-sm text-white bg-black rounded-md">
              <FaPrint className="w-4 h-4 mr-2" />
              <span>Print</span>
            </button>

            <button
              className="flex items-center justify-center px-4 py-2 text-sm text-white bg-red-600 rounded-md"
              onClick={genaratePDF}
            >
              <FaFilePdf className="w-4 h-4 mr-2" />
              <span>PDF</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <div className="flex justify-between items-center m-4">
            <div className="flex items-center">
              <FaSearch className="text-gray-400 " />
            </div>
            <input
              type="search"
              className="outline-none  border-b-2 border-gray-400"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <input
            type="date"
            className="outline-none  border-b-2 border-gray-400"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white" id="table-to-xls">
            <thead className="bg-gray-100 text-white">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  Category Name
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading && <div>Loading...</div>}
              {filteredCategories?.map((item) => {
                const { _id, name, date } = item;
                return (
                  <tr key={_id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{date}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  function filteredArray(arr, query) {
    return arr?.filter((el) => {
      return (
        el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        el.date.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
  }
};
export default CategoryReport;
