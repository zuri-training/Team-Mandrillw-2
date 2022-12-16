// Import the excelJS library
import * as XLSX from "xlsx";
import * as ExcelJS from "exceljs";
import filesave from "file-saver";

const input_1 = document.querySelector(".inputfile_1");
const input_2 = document.querySelector(".inputfile_2");



// Change name to the name of the uploaded files

// INput 1

document.querySelectorAll(".change_name_1").forEach(function (element) {
  input_1.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
      element.innerText = this.files[0].name;
    }
  });
});

// INput 2

document.querySelectorAll(".change_name_2").forEach(function (element) {
  input_2.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
      element.innerText = this.files[0].name;
    }
  });
});

// End of Change name to the name of the uploaded files
//
//
//
//
//
//

//
//
//
//
//
//
//

// ACTual excel COmparison function

const form = document.getElementById("file-upload__form");

const submitButton = document.getElementById("btnUpload");

submitButton.addEventListener("click", () => {
  // Listen for the 'click' event on the submit button

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    // Get the input element that contains the uploaded files

    // Get the list of uploaded files
    const input_files_1 = input_1.files;
    const input_files_2 = input_2.files;

    // INput 1

    if (input_files_1 && input_files_1.length > 0) {
      // Get the first file in the list of files using file reader Api
      var file1 = input_files_1[0];

      const reader = new FileReader();
      reader.readAsBinaryString(file1);
      reader.onload = function (event) {
        // Read the Excel file and extract the data
        const data = event.target.result;
        // Create a new instance of the ExcelJS Workbook class

        // Store the contents of the first Excel file in a variable
        const firstExcelFile = data;
        const workbook1 = new ExcelJS.Workbook();
        workbook1.xlsx.load(firstExcelFile).then(function () {
          // Check if a file was selected
          const worksheet1 = workbook1.getWorksheet(1);
          // INput 2

          if (input_files_2 && input_files_2.length > 0) {
            // Get the first file in the list of files
            var file2 = input_files_2[0];

            const reader = new FileReader();

            reader.readAsBinaryString(file2);
            reader.onload = function (event) {
              // Read the Excel file and extract the data
              const data = event.target.result;
              // Store the contents of the second Excel file in a variable
              const secondExcelFile = data;

              const workbook2 = new ExcelJS.Workbook();

              workbook2.xlsx.load(secondExcelFile).then(function () {
                const worksheet2 = workbook2.getWorksheet(1);

               
                  // Loop through each cell in the worksheet
                  worksheet1.eachRow((row, rowNumber) => {
                    row.eachCell((cell, colNumber) => {
                      // Give each cell an exclusive name using its row and column numbers
                      cell.name = `Cell Row: ${rowNumber}, Col: ${colNumber}`;
                    });
                  });
                  
                  // Loop through each cell in the worksheet
                worksheet2.eachRow((row, rowNumber) => {
                  row.eachCell((cell, colNumber) => {
                    // Give each cell an exclusive name using its row and column numbers
                    cell.name = `Cell Row: ${rowNumber}, Col: ${colNumber}`;
                  });
                });


                
                const comparisonResults = {};

                for (let i = 1; i <= worksheet1.rowCount; i++) {
                  for (let j = 1; j <= worksheet2.columnCount; j++) {
                    const cellAddress = `${i}${j}`;

                    if (
                      worksheet1.getCell(i, j).value !==
                      worksheet2.getCell(i, j).value
                    ) {
                      comparisonResults[cellAddress] = {
                        firstFileName: input_files_1[0].name,
                        firstCellName: `${worksheet1.getCell(i, j).name}`,
                        firstFile: `${worksheet1.getCell(i, j).value}`,
                        secondFileName: input_files_2[0].name,
                        secondCellName: `${worksheet2.getCell(i, j).name}`,
                        secondFile: `${worksheet2.getCell(i, j).value}`,
                      };
                      //                       const cellName = worksheet1.getCell(i, j).name;
                      //                       if (typeof cellName !== "undefined") {
                      //   console.log(cellName);
                      // } else {
                      //   console.log("Cell does not have a name");
                      // }
                      console.log(comparisonResults[cellAddress]);
                    } else if (Object.keys(comparisonResults).length === 0) {
                      const equalFileInfoElement =
                        document.querySelector(".equal-file-info");

                      if (equalFileInfoElement) {
                        equalFileInfoElement.textContent =
                          "Downloading...";
                      }
                    }
                  }
                }

                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet("Sheet1");

                for (const cellAddress in comparisonResults) {
                  const data_file = comparisonResults[cellAddress];
                  worksheet.addRow([
                    data_file.firstFileName,
                    data_file.firstCellName,
                    data_file.firstFile,
                    data_file.secondFileName,
                    data_file.secondCellName,
                    data_file.secondFile,
                  ]);
                }

                // window.location.assign("https://www.example.com/home");

                workbook.xlsx.writeBuffer().then(function (buffer) {
                  // use the `buffer` variable to write the Excel file to a file or send it to a client.
                  // use the file saver module to write the file to disk:
                  window.location.assign("/src/download-modal.html");

                  const filePath = "comparison-results.xlsx";

                  const blob = new Blob([buffer], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                  });
                  filesave.saveAs(blob, filePath);
                });
              });
            };
          }
        });
      };
    }
  }
});

// End of ACTual excel COmparison function

