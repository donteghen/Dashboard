export interface Project{
    id: string
    img: string,
    name:string,
    description: string,
    number_of_applications :number,
    critical_violations :number,
    robustness_index :number,
    efficiency_index :number,
    security_index :number,
    changeability_index:number,
    transferability_index :number,
    technical_size:number,
    
}