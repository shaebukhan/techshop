import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse'; // Library for parsing CSV
import Loader from '../../components/Loader';
import Sidebar from './Sidebar';
import { toast } from 'react-toastify';
import Cookies from "js-cookie";
const UploadProducts = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const token = Cookies.get("token");
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'text/csv') {
            setFile(selectedFile);

            // Read the file and parse CSV data on file selection
            const reader = new FileReader();
            reader.onload = ({ target }) => {
                const csvData = target.result;

                // Parse CSV data into JSON using PapaParse
                const parsedData = Papa.parse(csvData, { header: true });
                const jsonData = parsedData.data;
                console.log(jsonData.slice(0, 2));

            };
            reader.readAsText(selectedFile);
        } else {
            alert('Please upload a valid CSV file');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert('Please select a file first');
            return;
        }

        setLoading(true);

        const reader = new FileReader();
        reader.onload = async ({ target }) => {
            const csvData = target.result;

            // Parse CSV data into JSON using PapaParse
            const parsedData = Papa.parse(csvData, { header: true });
            const jsonData = parsedData.data;
            const prod = jsonData;
            // Create a FormData instance
            const formData = new FormData();

            // Append each product to FormData with indexed field names
            prod.forEach((product, index) => {
                formData.append(`products[${index}][stock]`, product['STOCK CODE'] || "");
                formData.append(`products[${index}][barcode]`, product['BAR CODE'] || "");
                formData.append(`products[${index}][categorycode]`, product['CATEGORY CODE'] || "");
                formData.append(`products[${index}][categoryname]`, product['CATEGORY NAME'] || "");
                formData.append(`products[${index}][subcategory]`, product['SUBCATEGORY NAME'] || "");
                formData.append(`products[${index}][warranty]`, product['WARRANTY'] || "");
                formData.append(`products[${index}][dbp]`, product['DBP'] || "");
                formData.append(`products[${index}][rrp]`, product['RRP'] || "");
                formData.append(`products[${index}][image]`, product['IMAGE'] || "");
                formData.append(`products[${index}][ldesc]`, product['LONG DESCRIPTION'] || "");
                formData.append(`products[${index}][sdesc]`, product['SHORT DESCRIPTION'] || "");
                formData.append(`products[${index}][etav]`, product['ETAV'] || "");
                formData.append(`products[${index}][height]`, product['HEIGHT'] || "");
                formData.append(`products[${index}][length]`, product['LENGTH'] || "");
                formData.append(`products[${index}][manufacture]`, product['MANUFACTURER'] || "");
                formData.append(`products[${index}][manufacturesku]`, product['MANUFACTURER SKU'] || "");
                formData.append(`products[${index}][optionalaccessories]`, product['OPTIONAL ACCESSORIES'] || "");
                formData.append(`products[${index}][weight]`, product['WEIGHT'] || "");
                formData.append(`products[${index}][width]`, product['WIDTH'] || "");
            });

            try {
                const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/add-products`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log("Response:", res);
                if (res.data.success) {
                    toast.success('All data uploaded successfully');
                    setFile(null); // Clear the file after successful upload
                }
            } catch (error) {
                console.error("Error uploading data:", error);
                alert('Error uploading data');
            } finally {
                setLoading(false); // Hide loader
            }
        };

        reader.readAsText(file);
    };


    return (
        <>
            <div className="wrapper d-flex align-items-stretch">
                {loading && <Loader />}
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div id="content" className="pt-3">
                    <button type="button" id="openSidebar" onClick={toggleSidebar} className="bars-btn">
                        <FaBarsStaggered />
                    </button>
                    <h2 className="b-clr">Upload Products</h2>
                    <div className="search-add-main">
                        <div>
                            <form onSubmit={handleSubmit} className="d-flex flex-column">
                                <input
                                    type="file"
                                    name="csvFile"
                                    accept=".csv"
                                    onChange={handleFileChange}
                                    className="form-control mb-4"
                                />
                                <button type="submit" className="common-nav-right">Upload</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadProducts;
