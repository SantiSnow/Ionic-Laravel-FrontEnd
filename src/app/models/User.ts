export class User{
    "id": number;
    "name": string;
    "email": string;
    "email_verified_at": string;
    "is_admin": number;
    "created_at": string;
    "updated_at": string;
    "current_team_id": string;
    "profile_photo_path": string;
    "profile_photo_url": string;
 
    constructor(id: number, name: string, is_admin: number, created_at: string, updated_at: string, email: string,
            email_verified_at: string, current_team_id: string, profile_photo_path: string, profile_photo_url: string){
        this.id = id;
        this.name = name;
        this.is_admin = is_admin;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.email = email;
        
        this.email_verified_at = email_verified_at;
        this.current_team_id = current_team_id;
        this.profile_photo_path = profile_photo_path;
        this.profile_photo_url = profile_photo_url;
    }
}
