import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AsyncSelect from 'react-select/async';

export default function Admin() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedstatus, setSelectedstatus] = useState('')
    const [data, setData] = useState([]); 
    const navigate = useNavigate();

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3200/applications');
                setData(response.data); 
                // console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    const handleStatusChang = async (e, _id) => {
        const newStatus = e.target.value;
        setSelectedstatus(newStatus);
        try {
            setData(prevData => 
                prevData.map(row => 
                    row._id === _id ? { ...row, status: newStatus } : row
                )
            );
           await axios.put(`http://localhost:3200/applications/${_id}`, { 
            status: newStatus 
        });
           
        } catch (error) {
            console.error('Error updating status:', error);
        }
    }

    const handleDateChange = (selectedOption) => {
        if (selectedOption && selectedOption.value) {
            setSelectedDate(selectedOption.value);
        } else {
            setSelectedDate(null);
        }
    };
    
    
    
    const handleDetail = (row) => {
        // ! กลับมาเปลี่ยน url ด้วยถ้าหลังบ้านเสร็จ `/details/${row.id}`
        navigate(`/page-one/${row._id}`);
        console.log("ดูรายละเอียดของ:", row);
    };

    const handleContract = (id) => {
        
        console.log("ดูใบสัญญาของแถวที่:", id);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('th-TH', options);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'ผ่าน':
                return '#009028';
            case 'รอดำเนินการ':
                return '#DC9E00';
            case 'ไม่ผ่าน':
                return '#B80000';
            default:
                return 'inherit';
        }
    };
    console.log(data)
    
    const loadOptions = async (inputValue) => {
        try {
            const response = await axios.get('http://localhost:3200/applications');
            const Data = response.data;
            const filteredOptions = Data
                .filter((row) => row.date.includes(inputValue))
                .map(row => ({
                    value: row.date, 
                    label: formatDate(row.date),
                }));
                console.log(filteredOptions)
            return filteredOptions;
        } catch (error) {
            console.error('Error fetching options:', error);
            return [];
        }
    };
    
    
    
    return (
        <div style={{height:'100vh'}}>
            <h1  style={{textShadow: '2px 2px 4px #BFBFBF',color:'#EF4923'}}>รายชื่อผู้สมัครงาน</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                            <div style={{
                                borderRadius:' 20px 0 0 20px ',
                                borderRight: '4px solid', 
                                borderColor: '#fff',
                                backgroundColor:'#EF4923',
                                height:'2.5rem',padding:'4px',
                                alignContent:'center',marginBottom:'2px'}}>
                                <AsyncSelect
                                    cacheOptions
                                    loadOptions={loadOptions}
                                    defaultOptions
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#EF4923',
                                        border: 'none',
                                        color: '#fff',
                                        borderRadius:'4rem'
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: '#fff',
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: '#fff',
                                    }),
                                    input: (provided) => ({
                                        ...provided,
                                        color: '#fff',
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#EF4923',
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        color: state.isSelected ? '#EF4923' : '#fff',
                                        backgroundColor: state.isSelected ? '#fff' : '#EF4923',
                                    }),
                                    dropdownIndicator: (provided) => ({
                                        ...provided,
                                        color: '#fff',
                                    }),
                                    indicatorSeparator: (provided) => ({
                                        ...provided,
                                        backgroundColor: 'none',
                                    }),
                                    clearIndicator: (provided) => ({
                                        ...provided,
                                        color: '#fff',
                                    }),
                                    }}
                                    placeholder={selectedDate ? formatDate(selectedDate) : "วัน / เดือน / ปี"}
                                    isClearable
                                />    
                            </div>
                            </th>
                            <th>
                                <p style={{
                                borderRight: '3px solid', 
                                borderColor: '#fff',
                                backgroundColor:'#EF4923',
                                height:'2.5rem',padding:'4px',
                                alignContent:'center',
                                marginBottom:'2px'}}>ชื่อ - นามสกุล ผู้สมัคร</p>
                            </th>
                            <th>
                                <p style={{
                                borderRight: '3px solid', 
                                borderColor: '#fff',
                                backgroundColor:'#EF4923',
                                height:'2.5rem',padding:'4px',
                                alignContent:'center',
                                marginBottom:'2px'}}>ตำแหน่งงานที่สมัคร</p>
                            </th>
                            <th>
                                <p style={{
                                borderRight: '3px solid', 
                                borderColor: '#fff',
                                backgroundColor:'#EF4923',
                                height:'2.5rem',padding:'4px',
                                alignContent:'center',
                                marginBottom:'2px'}}>รายละเอียดเพิ่มเติม</p>
                            </th>
                            <th>
                                <p style={{
                                borderRight: '3px solid',
                                borderColor: '#fff',
                                backgroundColor:'#EF4923',
                                height:'2.5rem',padding:'4px',
                                alignContent:'center',
                                marginBottom:'2px'}}>สถานะ</p>
                            </th>
                            <th>
                                <p style={{
                                borderRadius:'0 20px 20px 0',
                                borderRight: '3px solid',
                                borderColor: '#fff',
                                backgroundColor:'#EF4923',
                                height:'2.5rem',padding:'4px',
                                alignContent:'center',marginBottom:'2px'}}>ใบสัญญา</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {data
                    .filter((row) => selectedDate === '' || row.date === selectedDate)
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map((row) => (
                        <tr key={row._id}>
                            <td>
                                <div style={{
                                borderRadius:' 15px 15px ',
                                borderRight: '3px solid', 
                                borderColor: '#fff',
                                backgroundColor:'#EF4923',height:'1.5rem',
                                padding:'5px',alignContent:'center',color:'#fff',}}>
                                    <p style={{
                                    margin:'0 0 0 1rem',paddingTop:'2px',
                                    fontFamily:'Inter'}}>
                                        {formatDate(row.date)
                                    }</p>
                                </div>
                            </td>
                            <td>
                                <div style={{
                                borderRight: '3px solid', 
                                borderColor: '#fff',
                                backgroundColor:"#f2f2f2",borderRadius:' 999em 0 0 999em ',
                                height:'2rem',padding:'1px'}}>
                                  <p style={{margin:'0 0 0 1rem',paddingTop:'5px'}}>{row.name}</p>
                                </div>
                            </td>
                            <td>
                                <div style={{ 
                                borderColor: '#fff',backgroundColor:"#f2f2f2",
                                borderRadius:'0 999em  999em 0',
                                height:'2rem',textAlign:'center',
                                padding:'1px'}}>
                                    <p style={{paddingTop:'5px'}}>{row.position}</p>
                                </div>
                                
                            </td>
                            <td >
                                <div style={{display:'flex',justifyContent: 'center',}}>
                                <button key={row.id}  onClick={() => handleDetail(row)} style={{
                                    backgroundColor: '#EF4923',
                                    borderRadius: '15px',
                                    border: 'none',
                                    height: '2.3rem',
                                    width: '8.5rem',fontSize:'15px',
                                    color: '#fff',cursor:'pointer'}}>เพิ่มเติม</button>
                                </div>
                            </td>
                            <td>
                            <div  style={{ 
                                backgroundColor: getStatusColor(row.status), color:'#fff',
                                borderRadius: '15px', border: 'none', height: '2.3rem', width: '5rem', textAlign:'center',
                                fontSize:'15px', paddingTop:'2px', fontFamily:'Inter', cursor:'pointer'
                            }}>
                                <select key={row._id}
                                    value={row.status} 
                                    onChange={(e) => handleStatusChang(e, row._id)} 
                                    style={{ 
                                        backgroundColor: getStatusColor(selectedstatus), appearance: 'none', animation: 'none', outline: 'none',
                                        borderRadius: '15px', border: 'none', boxShadow:'0 2px #BFBFBF',
                                        height: '2.3rem', width: '5rem', textAlign:'center', fontSize:'15px', fontFamily:'Inter',
                                        cursor:'pointer', color:'#fff'
                                    }}>
                                    {data.map(row => (
                                    <option key={row._id} value={row.status}>{row.status}</option>
                                    ))}
                                    {!data.some((value) => value.status === "ผ่าน") && <option value="ผ่าน">ผ่าน</option>}
                                    {!data.some((value) => value.status === "ไม่ผ่าน") && <option value="ไม่ผ่าน">ไม่ผ่าน</option>}
                                    {!data.some((value) => value.status === "รอดำเนินการ") && <option value="รอดำเนินการ">รอดำเนินการ</option>}
                                
                                </select>
                            </div>

                            </td>
                            <td>
                            {row.status === "รอดำเนินการ" && (
                                <button onClick={() => handleContract(row.id)} style={{backgroundColor:'#090074',color:'#fff',borderRadius: '15px',
                                border: 'none',
                                height: '2.3rem', fontSize:'13px',
                                width: '4.8rem',fontFamily:'Inter',marginLeft:'2px',cursor:'pointer'}}>ออกสัญญา</button>
                            )}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
