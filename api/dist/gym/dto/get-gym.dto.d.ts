export declare class GetGymDto {
    id: number;
    name: string;
    location: string;
    image: string;
    isModifiable?: boolean;
    static from(plain: any): GetGymDto;
}
