export interface User {
    
        id: number,
        first_name: string;
        last_name: string;
        role: "staff" | "admin";
        profile_pic_url:string;
        middle_name:string;
        birth_date:number;
        birth_month:number;
        birth_year:number;
        phone_number:number;

        
}