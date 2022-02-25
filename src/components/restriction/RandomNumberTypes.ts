export type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

type RandomNumberType = {
    value:number;
}

type PositiveNumber = RandomNumberType & {
    isPositive:boolean;
    isNegative?:never;
    isZero?:never;
}

type NegativeNumber = RandomNumberType & {
    isNegative:boolean;
    isPositive?:never;
    isZero?:never;
}

type Zero = RandomNumberType & {
    isZero:boolean;
    isPositive?:never;
    isNegative?:never;
}