import { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { useQuery } from '@tanstack/react-query';
import { Triangle } from 'react-loader-spinner';
import { useContext } from 'react';
import { AuthContext } from '../../../Authprovider/Authprovider';

const Allreports = () => {
    const [reportDatas, setReportData] = useState(null);
    const { user } = useContext(AuthContext)
    const { data, isFetched } = useQuery({
        queryKey: ['allreport'],
        queryFn: async () => {
            try {
                const response = await axios.get(`http://localhost:3000/reports?reportEmail=${user?.email}`);
                if (!response.data) {
                    throw new Error('Failed to fetch report data');
                }
                setReportData(response.data.reports);
            } catch (error) {
                console.error('Error fetching report data:', error);
            }
        }
    });

    if (!isFetched) {
        return (
            <div className="flex h-[100vh] justify-center items-center">
                <Triangle
                    height="150"
                    width="150"
                    color="#4fa94d"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        );
    }

    const viewReportAsPDF = (reportData) => {
        if (reportData) {
            const pdf = new jsPDF();
            pdf.setFontSize(20);
            pdf.setFont('times', 'bold');
            pdf.text('Hospital Report', 20, 20);
            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0);
            pdf.setFont('times', 'bold');
            pdf.text('Patient Information', 20, 40);
            pdf.setFont('times', 'normal');
            pdf.setFontSize(14);
            pdf.text(`Email: ${reportData.email}`, 20, 55);
            pdf.line(20, 65, 190, 65);
            pdf.setFont('times', 'bold');
            pdf.text('Report Details', 20, 75);
            pdf.setFont('times', 'normal');
            pdf.setFontSize(12);
            pdf.text(`Test Name: ${reportData.test_name}`, 20, 90);
            pdf.text(`Test Result: ${reportData.test_result}`, 20, 105);
            const interpretationLines = pdf.splitTextToSize(`Test Interpretation: ${reportData.test_interpretation}`, 150);
            pdf.text(interpretationLines, 20, 120);
            pdf.line(20, 130, 190, 130);
            pdf.output('dataurlnewwindow');
        }
    };

    const downloadReportAsPDF = (reportData) => {
        if (reportData) {
            const pdf = new jsPDF();
            pdf.setFontSize(20);
            pdf.setFont('times', 'bold');
            pdf.text('Hospital Report', 20, 20);
            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0);
            pdf.setFont('times', 'bold');
            pdf.text('Patient Information', 20, 40);
            pdf.setFont('times', 'normal');
            pdf.setFontSize(14);
            pdf.text(`Email: ${reportData.email}`, 20, 55);
            pdf.line(20, 65, 190, 65);
            pdf.setFont('times', 'bold');
            pdf.text('Report Details', 20, 75);
            pdf.setFont('times', 'normal');
            pdf.setFontSize(12);
            pdf.text(`Test Name: ${reportData.test_name}`, 20, 90);
            pdf.text(`Test Result: ${reportData.test_result}`, 20, 105);
            const interpretationLines = pdf.splitTextToSize(`Test Interpretation: ${reportData.test_interpretation}`, 150);
            pdf.text(interpretationLines, 20, 120);
            pdf.line(20, 130, 190, 130);
            pdf.save('patient_report.pdf');
        }
    };

    console.log(reportDatas);

    return (
        <div>
            <h1 className=' text-5xl text-center py-7'>Patient Report</h1>

            {reportDatas && (
                <div className="overflow-x-auto ">
                    <table className="table table-zebra">
                        <thead className='  bg-green-600'>
                            <tr>
                                <th>Email</th>
                                <th>Test Name</th>
                                <th>Test Result</th>
                                <th>Test Interpretation</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportDatas?.map((reportData, idx) => (
                                <tr key={idx}>
                                    <td>{reportData.email}</td>
                                    <td>{reportData.test_name}</td>
                                    <td>{reportData.test_result}</td>
                                    <td>{reportData.test_interpretation}</td>
                                    <td>
                                        <button className=' btn btn-xs btn-success' onClick={() => viewReportAsPDF(reportData)}>View Report</button>
                                    </td>
                                    <td>
                                        <button className=' btn btn-xs btn-success' onClick={() => downloadReportAsPDF(reportData)}>Download Report</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Allreports;

{/* <div className="overflow-x-auto">
    <table className="table table-zebra">

{/* <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
        </thead>
        <tbody>

            {/* <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
            </tr>

            <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
            </tr>
     
            <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
            </tr>
        </tbody>
    </table >
</div >  */}