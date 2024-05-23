import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedstatus, setSelectedstatus] = useState('')
    const navigate = useNavigate();

    const handleStatusChang = (e) => {
        const selectedstatus = e.target.value;
        setSelectedstatus(selectedstatus);
    }

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate);
    };
    
    const data = [
        { id: 1, name: 'John', position: 'Developer', details: 'Details about John', status: 'ผ่าน', contract: 'Contract details', date: '2024-05-09' },
        { id: 2, name: 'Alice', position: 'Designer', details: 'Details about Alice', status: 'รอดำเนินการ', contract: 'Contract details', date: '2024-05-10' },
        { id: 3, name: 'Bob', position: 'Manager', details: 'Details about Bob', status: 'ไม่ผ่าน', contract: 'Contract details', date: '2024-05-11' },
        { id: 4, name: 'Diana', position: 'Marketing', details: 'Details about Diana', status: 'ผ่าน', contract: 'Contract details', date: '2024-05-12' },
    ];

    const handleDetail = (row) => {
        // ! กลับมาเปลี่ยน url ด้วยถ้าหลังบ้านเสร็จ `/details/${row.id}`
        navigate('/page-one');
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
                             <select value={selectedDate} onChange={handleDateChange} 
                             style={{
                                backgroundColor:'#EF4923',
                                border:'none',color:'#fff',
                                padding:'0 0 3px 3px ', 
                                cursor: 'pointer',margin:'3px',
                                fontSize:'16px',
                                animation: 'none',outline: 'none',}}>
                                <option value="" >วัน / เดือน / ปี</option>
                                {data.map((row) => (
                                <option key={row.date} value={row.date}>{formatDate(row.date)}</option>
                                ))}
                             </select>
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
                    .map((row) => (
                        <tr key={row.id}>
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
                                <button onClick={() => handleDetail(row)} style={{
                                    backgroundColor: '#EF4923',
                                    borderRadius: '15px',
                                    border: 'none',
                                    height: '2.3rem',
                                    width: '8.5rem',fontSize:'15px',
                                    color: '#fff',cursor:'pointer'}}>เพิ่มเติม</button>
                                </div>
                            </td>
                            <td>
                                <div  style={{backgroundColor: getStatusColor(row.status),color:'#fff',
                                    borderRadius: '15px',
                                    border: 'none',
                                    height: '2.3rem',width: '5rem',textAlign:'center',
                                    fontSize:'15px',paddingTop:'2px',fontFamily:'Inter',cursor:'pointer'}}>
                                <select value={selectedstatus} onChange={handleStatusChang} style={{ 
                                    backgroundColor: getStatusColor(selectedstatus),
                                    appearance: 'none',animation: 'none',outline: 'none',
                                    borderRadius: '15px',
                                    border: 'none',boxShadow:'0 2px #BFBFBF',
                                    height: '2.3rem',width: '5rem',textAlign:'center',
                                    fontSize:'15px',fontFamily:'Inter',
                                    cursor:'pointer',color:'#fff'}}>
                                    <option value="Passed">ผ่าน</option>
                                    <option value="Failed">ไม่ผ่าน</option>
                                    <option value="Pending">รอดำเนินการ</option>
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
