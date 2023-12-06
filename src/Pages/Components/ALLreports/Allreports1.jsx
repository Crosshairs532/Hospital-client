// // Assuming you have a React component to display reports
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useContext } from 'react';
// import { AuthContext } from '../../../Authprovider/Authprovider';

// const Allreports = () => {
//     const { user } = useContext(AuthContext)
//     const [reports, setReports] = useState([]);
//     const [pdfPath, setPdfPath] = useState(null);

//     useEffect(() => {
//         const fetchReports = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/reports?reportEmail=${user?.email}`);
//                 setReports(response.data.reports);

//                 // Assuming the server sends the PDF path in the response
//                 setPdfPath(response.data.pdfPath);
//             } catch (error) {
//                 console.error('Error fetching reports:', error);
//             }
//         };

//         fetchReports();
//     }, [user?.email]);
//     console.log(pdfPath, reports);
//     const handleViewReport = async (reportId) => {
//         try {
//             const response = await axios.get(`http://localhost:3000/reports?id=${reportId}`, { responseType: 'blob' });
//             console.log(response.data);
//             const blob = new Blob([response.data], { type: 'application/pdf' });
//             const url = URL.createObjectURL(blob);

//             window.open(url, '_blank');
//         } catch (error) {
//             console.error('Error fetching PDF:', error);
//         }
//     };
//     const handleDownloadReport = async (reportId) => {
//         try {
//             // Fetch the PDF data from the server
//             const response = await axios.get(`http://localhost:3000/reports?id=${reportId}`, { responseType: 'blob' });
//             const blob = new Blob([response.data], { type: 'application/pdf' });

//             // Ask the user to choose where to save the file
//             const savePath = window.prompt('Enter the file name or path:', `report_${reportId}.pdf`);

//             // If the user cancels the prompt, do nothing
//             if (!savePath) {
//                 return;
//             }

//             // Create a download link with the chosen file name or path
//             const link = document.createElement('a');
//             link.href = URL.createObjectURL(blob);
//             link.download = savePath;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         } catch (error) {
//             console.error('Error fetching PDF:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Reports Table</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Test Name</th>
//                         <th>Result</th>
//                         <th>Interpretation</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {reports.map((report) => (
//                         <tr key={report._id}>
//                             <td>{report.test_name}</td>
//                             <td>{report.test_result}</td>
//                             <td>{report.test_interpretation}</td>
//                             <td>
//                                 <button onClick={() => handleViewReport(report._id)}>View Report</button>
//                                 <button onClick={() => handleDownloadReport(report._id)}>Download Report</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Allreports;
