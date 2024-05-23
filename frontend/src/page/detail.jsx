import React from 'react'
import Bar from '../component/bar';
import { useNavigate } from 'react-router-dom';

/*
TODO แต่ละอันมีรายละเอียดอีก หลังบ้านยังไม่ทำ 
TODO สองหน้นี้แค่เก็ตข้อมูลลมาดูเฉยๆ
*/

export default function Detail() {
    return (        
      <div style={{ display: 'flex'}}>
          <Bar />
          <PageOne />
      </div>
    )
}

function PageOne() {
    const navigate = useNavigate();

    return (
        <div style={{ flex: 1, padding: '20px' }}>
            <div style={{display:'flex',textAlign:'center',alignContent:'center',justifyContent:'center'}}>
                <p style={{fontSize:'28px',margin:'2rem 0'}}>ใบรับสมัครพนักงาน</p>
            </div>
            {/* ! อย่าลืมมาใส่หลังบ้าน 
            ex. <p>ใบรับสมัครพนักงาน: {data.employeeApplication}</p>
            <p>วันที่เริ่มงาน: {data.startDate}</p>
            */}
            <div style={{margin:'0 3rem'}}>
           
            <div>
              <p><strong>วันที่เริ่มงาน</strong> สวัสดี</p>
            <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
              <p style={{  }}><strong>ตำแหน่ง</strong></p> 
              <p style={{ }}><strong>หน่วยงาน</strong></p>
            </div>
            <div style={{ position: 'absolute', top: '10rem', right: '3rem',width: '13rem', height: '15rem' }}>
                <img src='' alt="Profile" style={{  objectFit: 'cover' }} />
            </div>
            </div>
            
            <div style={{margin:'2rem 0'}}>
                <p><strong>ทราบข่าวการสมัครงาน จาก </strong> </p>
                <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p >ชื่อ  ผู้ที่แนะนำมาสมัคร</p>     
                </div>
                <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p style={{  }}>เบอร์โทรศัพท์</p> 
                <p style={{ }}>เลขที่หลังบัตรประชาชนผู้สมัคร</p>
                </div>
            </div>
            
            <div style={{margin:'2rem 0'}}>
                <p><strong>บัตรประกันสังคม</strong></p>
                <div  style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p></p>
                </div>
            </div>

            <div style={{margin:'2rem 0'}}>
                <p><strong>รายละเอียดส่วนตัว</strong></p>
                <div  style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p>ชื่อ</p> <p>สัญชาติ</p> <p>เชื้อชาติ</p> <p>ศาสนา</p>
                <p>เกิดวันที่</p> <p>อายุ</p> <p>สถานที่เกิด</p>
                </div>
            </div>

            <div style={{margin:'2rem 0'}}>
                <p><strong>ที่อยู่ตามบัตรประชาชน</strong></p>
                <div  style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p>เลขที่</p> <p>หมู่ที่</p> <p>ตรอก/ซอย</p> <p>ถนน</p> <p>ตำบล/แขวง</p>
                <p>อำเภอ</p> <p>จังหวัด</p> <p>รหัสไปรษณีย์</p> <p>โทรศัพท์</p>
                <p>บัตรประชาชนเลขที่</p> <p>ออก ณ ที่ว่าการเขต</p> <p>จังหวัด</p>
                </div>
            </div>

            <div style={{margin:'2rem 0'}}>
            <p><strong>ที่อยู่ปัจจุบันที่สามารถติดต่อได้</strong></p>
              <div  style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p>สถานะ</p> <p>เลขที่</p>  <p>หมู่ที่</p> <p>ตรอก/ซอย</p> <p>ถนน</p> 
                <p>ตำบล/แขวง</p> <p>อำเภอ</p> <p>จังหวัด</p> <p>รหัสไปรษณีย์</p>
             </div>
            </div>
            <p><strong>สถานะครอบครัว - </strong></p>     
            {/* ! ถ้ามีสถานะจะมีข้อมูลตัวอื่นขึ้นมาด้วย */}
            <FamilyStatus />
            
            <div>
              <p><strong>บิดา - มารดาผู้สมัคร</strong></p>
              <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
              <p>ชื่อ</p> <p>อายุ</p> <p>อาชีพ</p>
              </div>
              <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
              <p>ชื่อ</p> <p>อายุ</p> <p>อาชีพ</p>
              </div>
            </div>
            </div>

            <div style={{display:'flex',alignContent:'center',justifyContent:'center',margin:'2rem 0'}}>
                <button onClick={() => navigate('/page-one')} style={{
                backgroundColor:'#EF4923',color:'#fff',border:'none',boxShadow:'none',
                width:'2rem',height:'2rem',margin:'0.5rem',cursor:'pointer',}} >1</button>
                <button onClick={() => navigate('/page-two')} style={{
                backgroundColor:'#D9D9D9',color:'#fff',border:'none',boxShadow:'none',
                width:'2rem',height:'2rem',margin:'0.5rem',cursor:'pointer',}}>2</button>
            </div>
        </div>   
    )
}

function FamilyStatus(props) {
    const { status } = props;
  
    return (
      <div>
        {status && (
          <div>
            {/* ! ตรวจสอบสถานะและแสดงข้อมูลเฉพาะเมื่อมีสถานะ */}
            {status === 'Married' && (
              <p><strong>ทะเบียนสมรส</strong></p>
            )}
            {status === 'Single' && (
              <p>ข้อมูลสำหรับสถานะโสด</p>
            )}
            {status === 'Engaged' && (
              <p>ข้อมูลสำหรับสถานะหมั้น</p>
            )}
            {status === 'Divorced' && (
              <p>ข้อมูลสำหรับสถานะหย่าร้าง</p>
            )}
            {status === 'Widowed' && (
              <p>ข้อมูลสำหรับสถานะหม้าย</p>
            )}
            {status === 'Separated' && (
              <p>ข้อมูลสำหรับสถานะแยกกันอยู่</p>
            )}
          </div>
        )}
      </div>
    );
  }