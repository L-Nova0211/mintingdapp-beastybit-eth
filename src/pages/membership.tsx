import type { NextPage } from "next";

export interface NFTType {
  mint: string;
  staked: boolean;
  stakedTime: number;
}

const Membership: NextPage = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center pt-40 lg:px-[100px] xl:px-[300px] px-5">
        <img
          src="img/membership-benefits.png"
          className="w-full object-cover justify-center flex items-center"
        />
      </div>
    </div>
  );
};

export default Membership;
