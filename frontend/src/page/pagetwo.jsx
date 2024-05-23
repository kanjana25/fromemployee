import React from 'react'
import Bar from '../component/bar';
import { useNavigate } from 'react-router-dom'
/*
    TODO ตรงความสามารถพิเศษมีให้กรอกแค่นิดเดียว
    TODO ใส่ตารางมาพร้อมหลังบ้าน
    TODO เพิ่มปุ่มกดกลับ
*/
export default function PageTwo() {
  return (
    <div>
         <div style={{ display: 'flex' }}>
                <Bar />
                <PageTwO />
            </div>
    </div>
  )
}

function PageTwO(){
    const navigate = useNavigate();
    return(
        <div>
            <div style={{display:'flex',textAlign:'center',alignContent:'center',justifyContent:'center'}}>
                <p style={{fontSize:'28px',margin:'1rem'}}>ใบรับสมัครพนักงาน</p>
            </div>

            <p style={{textAlign:'center',margin:'3rem 0 0'}}><strong> ประวัติการศึกษา</strong></p>
            <table style={{margin:'1rem 0'}}>
                <thead style={{backgroundColor:'#EF4923',borderCollapse: 'collapse'}}>
                    <tr>
                        <th style={{padding:'0.4rem 2rem',}}>วุฒิการศึกษา</th>
                        <th style={{padding:'0.4rem 2rem',}}>สถาบันการศึกษา</th>
                        <th style={{padding:'0.4rem 2rem',}}>ที่ตั้ง</th>
                        <th style={{padding:'0.4rem 2rem',}}>ระยะเวลาที่ศึกษา ตั้งแต่ต้นจนจบ</th>
                    </tr>
                </thead>
                <tbody style={{ marginTop:'1rem' }}>
                    <tr>
                        <td colSpan="4" style={{ height: '0.1rem' }}></td>
                    </tr>
                    <tr style={{ marginTop: '1rem' }}>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>s</td>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>s</td>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>s</td>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>s</td>
                    </tr>
                    {/* {educationData.map((education) => (
                        <tr key={education._id}>
                            <td>{education.level}</td>
                            <td>{education.institution}</td>
                            <td>{education.startYear}</td>
                            <td>{education.endYear}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>

            <p style={{textAlign:'center',marginTop:'3rem'}}><strong>ประวัติการทำงาน</strong></p>
            <table style={{margin:'1rem 0'}}>
                <thead style={{backgroundColor:'#EF4923',borderCollapse: 'collapse'}}> 
                    <tr>
                        <th style={{padding:'0.4rem 2rem'}}>ระยะเวลาทำงาน</th>
                        <th style={{padding:'0.4rem 2rem'}}>ชื่อสถานที่ทำงานและที่อยู่</th>
                        <th style={{padding:'0.4rem 2rem'}}>ดำแหน่งที่รับผิดชอบ</th>
                        <th style={{padding:'0.4rem 2rem'}}>เงินเดือนครั้งสุดท้าย</th>
                        <th style={{padding:'0.4rem 2rem'}}>สาเหตุที่ลาออก</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="5" style={{ height: '0.1rem' }}></td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>2</td>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>2</td>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>2</td>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>2</td>
                        <td style={{textAlign:'center',border:'1px solid #676767'}}>2</td>
                    </tr>
                    {/* {educationData.map((education) => (
                        <tr key={education._id}>
                            <td>{education.level}</td>
                            <td>{education.institution}</td>
                            <td>{education.startYear}</td>
                            <td>{education.endYear}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>

            <div style={{margin:'2rem 0'}}>
            <p><strong>สมุดบัญชีธนาคาร</strong></p>
            <p>มีธนาคาร</p>
            </div>

            <div style={{margin:'2rem 0'}}>
            <p><strong>เมื่อเกิดเหตุฉุกเฉิน บุคคลที่สามารถติดต่อได้</strong></p>
                <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                    <p>ชื่อ</p>   <p>เบอร์โทรศัพท์</p>
                </div>
            </div>

            <div style={{margin:'2rem 0'}}>
            <p><strong>ความสามารถพิเศษ</strong></p>
                <div>
                    <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                        columnGap: '20px', rowGap: '10px' }}>
                        <p>สามารถขับขี่รถจักรยานยนและรถยนต์ <strong>ได้</strong></p>
                        <p>เลขที่ใบอนุญาตขับขี่เลขที่</p>
                    </div>
                    <p>หมดอายุ</p>
                    <p>สามารถและพร้อมที่จะเดินทางไปปฏิบัติงานในสถานที่ต่าง ๆ ได้หรือไม่ เพราะเหตุใด<strong>ได้</strong></p>
                </div>
            </div>

            <div style={{margin:'1rem 0'}}>
            <p><strong>เอกสารเพิ่มเติม</strong></p>
            </div>

            <div>
                <button style={{backgroundColor:'#EF4923',color:'#fff',
                boxShadow:'0 2px #bfbfbf',border:'none',height:'2.5rem',
                width:'10rem',borderRadius:'0.5rem',fontSize:'15px',
                margin:'0.5rem 1rem',cursor:'pointer'}}>สำเนาบัตรประชาชน</button>
            </div>
            <div>
                <button style={{backgroundColor:'#EF4923',color:'#fff',
                boxShadow:'0 2px #bfbfbf',border:'none',height:'2.5rem',
                width:'10rem',borderRadius:'0.5rem',fontSize:'15px',
                margin:' 0.5rem 1rem ',cursor:'pointer'}}>สำเนาทะเบียนบ้าน</button>
            </div>
            
            <div style={{display:'flex',alignContent:'center',justifyContent:'center',margin:'2rem 0 0'}}>
                <button onClick={() => navigate('/page-one')}style={{
                backgroundColor:'#D9D9D9',color:'#fff',border:'none',boxShadow:'none',
                width:'2rem',height:'2rem',margin:'0.5rem',cursor:'pointer',}}>1</button>
                <button onClick={() => navigate('/page-two')} style={{
                backgroundColor:'#EF4923',color:'#fff',border:'none',boxShadow:'none',
                width:'2rem',height:'2rem',margin:'0.5rem',cursor:'pointer',}}>2</button>
            </div>
        </div>
    )
}
