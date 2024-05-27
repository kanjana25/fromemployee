var express = require('express');
var mongoose =require('mongoose')


const  applicationSchema = new mongoose.Schema({
    appy_date: Date,
    position:String,
    depertment:String,
    file:{filename: String,
    path: String,
    size: Number,
    uploadDateFile: { type: Date, default: Date.now },},
    date: { type: Date, default: Date.now } ,
    image: {
        filename: String,
        path: String,
        size: Number,
        uploadDateImage: { type: Date, default: Date.now } 
    },
    status: {
        type: String,
        enum: ['รอดำเนินการ', 'ผ่าน', 'ไม่ผ่าน'],
        default: 'รอดำเนินการ'
    },
    referrer:{
        ref_name:String,
        ref_depertment:String,
        ref_phone:String,
    },
    name:String,
    age:Number,
    nationality:String,
    ethnicity:String,
    religion:String,
    birth_date:Date,
    birth_place: String,
    id_card_number:String,
    id_card_issus_place:String,
    id_card_number_back:String,
    id_card_province: String,
    social_security:{
        has_social_security: {
            type: Boolean,
            required: true
        },
        social_security_hospital:String,    
    },
    contact_detail:{
        current_address: {
            address_line: String,
            moo: String,
            alley: String,
            road: String,
            sub_district: String,
            district: String,
            province: String,
            postal_code: String,
        },
        permanent_address: {
            status: String,
            address_line: String,
            moo: String,
            alley: String,
            road: String,
            sub_district: String,
            district: String,
            province: String,
            postal_code: String,
        },
        phone: { type: String, unique: true, default:0 },
        mobile_phone: { type: String, unique: true, default:0 },
    },
    marital_status:String,
    spouse_name: { type: String, default: null },
    spouse_nationality: { type: String, default: null },
    spouse_occupation: { type: String, default: null },
    spouse_workplace: { type: String, default: null },
    spouse_phone: { type: String, default: 0 },
    spoue_mobilephone: { type: String, default: 0 },
    childen_count:  { type: Number, default: 0 },
    children_studying: { type: Number, default: 0 },
    child_birth:[{ type: Date }], // มาดูอีกที
    parent:{
        father:{
            father_name:String,
            father_age:Number,
            father_occupation:String,
        },
        mather:{
            mather_name:String,
            mather_age:Number,
            mather_occupation:String,
        }
    },
    education_history: [
        {
            degree: String,
            institution_name: String,
            location:String,
            study_period:String,
        },
    ],
    work_experience:[{
        company_name: String,
        address: String,
        position: String,
        responsibilities: String,
        salary: Number,
        start_year: { type: Number },
        end_year: { type: Number },
        years_worked: { type: Number },
        reason_for_leaving: String
    }],
    bank:{
        bank_name: { type: String, default: null },
        account_number: { type: String, default: null }
    },
    emergency_contact:{
        emergency_name:String,
        emergency_phone_number: String,
        emergency_parent_phone: String,
        emergency_sibling_phone: String,
        emergency_relative_phone: String
    },
    special_skills:{
        driving_license: {
            license_number: String,
            motorcycle: { type: Boolean, default: false },
            car: { type: Boolean, default: false },
            expiry_date: Date,
            license_type: { type: String, enum: ['Temporary', 'Permanent'] }
          },
          willing_to_travel: { type: Boolean, default: false },
          reason_for_travel: String
    },    
});

const Application = mongoose.model('Application', applicationSchema);


module.exports = Application;