import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Bar from '../component/bar';
import { useNavigate, useParams } from 'react-router-dom';

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
    const [data,setData] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3200/applications/${id}`); // Replace '123' with the actual _id
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [id]);

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('th-TH', options);
    };

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
              <p><strong>วันที่เริ่มงาน</strong> {formatDate(data.appy_date)}</p>
            <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
              <p style={{  }}><strong>ตำแหน่ง</strong> {data.position}</p> 
              <p style={{ }}><strong>หน่วยงาน</strong> {data.depertment}</p>
            </div>
            <div style={{ position: 'absolute', top: '10rem', right: '3rem',width: '13rem', height: '15rem' }}>
                {data.image && data.image.path && <img src={data.image.path} alt="Profile" style={{  objectFit: 'cover' }} />}
            </div>
            </div>

            {data.referrer && (
            <div style={{margin:'2rem 0'}}>
                <p><strong>ทราบข่าวการสมัครงาน จาก </strong> {data.referrer.ref_depertment}</p>
                <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p >ชื่อ  ผู้ที่แนะนำมาสมัคร  {data.referrer.ref_name}</p>     
                </div>
                <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p style={{  }}>เบอร์โทรศัพท์  {data.referrer.ref_phone}</p> 
                <p style={{width:'25rem',paddingLeft:'1.7rem' }}>เลขที่หลังบัตรประชาชนผู้สมัคร {data.id_card_number_back}</p>
                </div>
            </div>
          )}
            
          {data.social_security ? (
            <div style={{margin:'2rem 0'}}>
                <p><strong>บัตรประกันสังคม</strong></p>
                <div  style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p>มี บัตรประกันสังคม</p>
                <p>โรงพยาบาล {data.social_security.social_security_hospital}</p>
                </div>
            </div>
          ): (
            <p>ไม่มี บัตรประกันสังคม</p>
             
        )}

            <div style={{margin:'2rem 0'}}>
                <p><strong>รายละเอียดส่วนตัว</strong></p>
                <div  style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p>ชื่อ {data.name}</p> <p>สัญชาติ {data.nationality}</p> <p>เชื้อชาติ {data.ethnicity}</p> <p>ศาสนา {data.religion}</p>
                <p>เกิดวันที่ {formatDate(data.birth_date)}</p> <p>อายุ {data.age}</p> <p>สถานที่เกิด {data.birth_place}</p>
                </div>
            </div>

            {data.contact_detail &&(
            <div style={{margin:'2rem 0'}}>
                <p><strong>ที่อยู่ตามบัตรประชาชน</strong></p>
                <div  style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p>เลขที่ {data.contact_detail.current_address.address_line}</p> <p>หมู่ที่ {data.contact_detail.current_address.moo}</p> <p>ตรอก/ซอย {data.contact_detail.current_address.alley}</p> <p>ถนน {data.contact_detail.current_address.road}</p> <p>ตำบล/แขวง {data.contact_detail.current_address.sub_district}</p>
                <p>อำเภอ {data.contact_detail.current_address.district}</p> <p>จังหวัด {data.contact_detail.current_address.province}</p> <p>รหัสไปรษณีย์ {data.contact_detail.current_address.postal_code}</p> <p>โทรศัพท์ {data.contact_detail.phone}</p>
                <p>บัตรประชาชนเลขที่ {data.id_card_number}</p> <p>ออก ณ ที่ว่าการเขต {data.id_card_issus_place}</p> <p>จังหวัด {data.id_card_province}</p>
                </div>
            </div>
            )}
            
            <div style={{margin:'2rem 0'}}>
            <p><strong>ที่อยู่ปัจจุบันที่สามารถติดต่อได้</strong></p>
              <div  style={{ display: 'grid',  gridTemplateColumns: 'repeat(4, 1fr)', 
                    columnGap: '20px', rowGap: '10px' }}>
                <p>สถานะ {data.contact_detail.permanent_address.status}</p> <p>เลขที่</p>  <p>หมู่ที่</p> <p>ตรอก/ซอย</p> <p>ถนน</p> 
                <p>ตำบล/แขวง</p> <p>อำเภอ</p> <p>จังหวัด</p> <p>รหัสไปรษณีย์</p>
                <p>โทรศัพท์มือถือ {data.contact_detail.phone}</p> <p>โทรศัพท์ที่สมารถติดต่อได้</p>
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