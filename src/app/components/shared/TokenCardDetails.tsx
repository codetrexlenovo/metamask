import React from "react";
import SelectFieldInvestment from "./SelectFieldInvestment";
import { formatDate } from "@/lib/utils/formatters";
import  { useState, useEffect } from "react";
// import Image from "next/image";
// import { contract, connectedAddress } from "@/lib/web3"; // Adjust import path if needed
import { contract } from "@/lib/web3"; // Adjust import path if needed
// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { useRouter, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// import { useAccount, useDisconnect } from "wagmi";
import { useAccount } from "wagmi";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";
// interface VestingCardDetailsProps {
 
// }

interface TokenSchedule {
  amount: bigint;
  beneficiary: string;
  claimed: bigint;
  cliff: bigint;
  end: bigint;
  initialUnlock: bigint;
  isInitialClaimed: boolean;
  round: bigint;
  start: bigint;
}
// interface BeneficiaryDetails {
//   address: string;
// }

// interface InvestmentFormProps {
//   beneficiaryDetails: BeneficiaryDetails;
// }
const TokenCardDetails:React.FC = () => {

      
     const [selectedRound, setSelectedRound] = useState<string | null>(null); // State for selected round
     const [vestingData, setVestingData] = useState<TokenSchedule[]>([]);
     const [data, setData] = useState<TokenSchedule | null>(null);
     const [submitted, setSubmitted] = useState<boolean>(false);
     const [initialClaimableAmount, setInitialClaimableAmount] =
       useState<string>("");
     const [claimableAmount, setClaimableAmount] = useState<string>("");
     const [showModal, setShowModal] = useState<boolean>(false);
     const [showModalClaimable, setShowModalClaimable] =
       useState<boolean>(false);
     const [totalInvestedAmount, setTotalInvestedAmount] = useState<number>(0);
     const [initialUnlockedAmount, setInitialUnlockedAmount] =
       useState<number>(0);
     const [initialUnlockPercentage, setInitialUnlockPercentage] =
       useState<number>(0);
     const [claimedAmount, setClaimedAmount] = useState<number>(0);
     const [remainingAmount, setRemainingAmount] = useState<number>(0);

    //  const searchParams = useSearchParams();
     const { isConnected, address } = useAccount();
     const rounds = ["Angel", "PreSeed", "Private", "IDO", "IEO_ILO"];
     const router = useRouter();
    //  const pathname = usePathname();
    //  const { disconnect } = useDisconnect();

    
    //  useEffect(() => {
    //    if (pathname === "/investment") {
    //      window.location.reload();
    //    }
    //  }, [pathname]);
  
    const updateCalculatedValues = (data: TokenSchedule) => {
      const investedAmount =
        parseFloat(data.amount.toString()) / Math.pow(10, 18);
      const unlockPercentage = parseFloat(data.initialUnlock.toString()) / 100;
      const unlockedAmount = (investedAmount * unlockPercentage) / 100;
      const claimedAmount =
        parseFloat(data.claimed.toString()) / Math.pow(10, 18);
      const remainingAmount = investedAmount - claimedAmount;

      setTotalInvestedAmount(investedAmount);
      setInitialUnlockPercentage(unlockPercentage);
      setInitialUnlockedAmount(unlockedAmount);
      setClaimedAmount(claimedAmount);
      setRemainingAmount(remainingAmount);
    };
    const claim = async (address: string, roundIndex: number) => {
      try {
        const finalResult = await contract.methods
          .claim(address, roundIndex)
          .send({ from: address, gas: "1000000", gasPrice: "5000000" });

        // Extract the transaction hash and status from the result
        const transactionHash = finalResult.transactionHash;
        const status = Number(finalResult.status); // Convert BigInt to number

        if (status === 1) {
          // Ensure claimableAmount is converted to BigInt
          const claimableAmountBigInt =
            BigInt(claimableAmount) * BigInt(Math.pow(10, 18));

          const updatedData = vestingData.map((item) => {
            if (rounds[Number(item.round)] === selectedRound) {
              return {
                ...item,
                claimed:
                  BigInt(item.claimed.toString()) + claimableAmountBigInt,
              };
            }
            return item;
          });
          setVestingData(updatedData);

          // Update claimable tokens
          const updatedClaimedTokens = (
            updatedData.reduce(
              (total, item) => total + Number(item.claimed.toString()),
              0
            ) / Math.pow(10, 18)
          ).toFixed(2);
          const updatedUnclaimedTokens = (
            Number(totalVestedAmount) - Number(updatedClaimedTokens)
          ).toFixed(2);

          console.log(updatedUnclaimedTokens)

          setClaimableAmount("0"); // Reset claimable amount
          setShowModal(false);
          setShowModalClaimable(false);

          toast.success(
            <div>
              Successfully claimed {claimableAmount} <br />
              <a
                href={`https://jumboscan.jumbochain.org/tx/${transactionHash}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Transaction
              </a>
              <Copy
                onClick={() => navigator.clipboard.writeText(transactionHash)}
                className='ml-2 bg-green-500 text-white px-2 py-1 rounded'
              />
            </div>
          );
        } else {
          toast.error(`Claim failed. Status: ${status}`);
          setShowModal(false);
          setShowModalClaimable(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("Error claiming tokens.");
        setShowModal(false);
        setShowModalClaimable(false);
      }
    };

    const calculateTotalVestedAmount = () => {
      return (
        vestingData.reduce(
          (total, item) => total + parseFloat(item.amount.toString()),
          0
        ) / Math.pow(10, 18)
      ).toFixed(2);
    };

    const totalVestedAmount = calculateTotalVestedAmount();
    const totalRounds = vestingData.length;
    const claimedTokens = (
      vestingData.reduce(
        (total, item) => total + parseFloat(item.claimed.toString()),
        0
      ) / Math.pow(10, 18)
    ).toFixed(2);
    const unclaimedTokens = (
      Number(totalVestedAmount) - Number(claimedTokens)
    ).toFixed(2);

   const claimInitialUnlockedTokens = async (
     address: string,
     roundIndex: number
   ) => {
     try {
       const finalResult = await contract.methods
         .claimInitialUnlockedTokens(address, roundIndex)
         .send({ from: address, gas: "1000000", gasPrice: "5000000" });
       const transactionHash = finalResult.transactionHash;
       const status = Number(finalResult.status); // Convert BigInt to number

       if (status === 1) {
         toast.success(
           <div>
             Successfully claimed {initialClaimableAmount} <br />
             <a
               href={`https://etherscan.io/tx/${transactionHash}`}
               target='_blank'
               rel='noopener noreferrer'
             >
               View Transaction
             </a>
             <Copy
               onClick={() => navigator.clipboard.writeText(transactionHash)}
               className='w-6 h-6 text-green-500 cursor-pointer'
             />
           </div>
         );
         setInitialClaimableAmount("0");
         setShowModal(false);
         setShowModalClaimable(false);

         if (data) {
           updateCalculatedValues(data); // Recalculate
         }
       } else {
         toast.error(`Claim failed. Status: ${status}`);
         setShowModal(false);
         setShowModalClaimable(false);
       }
     } catch (error) {
      
      console.log(error);
       toast.error("Error claiming tokens.");
       setShowModal(false);
       setShowModalClaimable(false);
     }
  };
  
    const handleClaimableAmount = (
      beneficiaryAddress: string,
      selectedRound: string | null
    ) => {
      if (selectedRound !== null) {
        const roundIndex = rounds.indexOf(selectedRound);
        calculateClaimable(beneficiaryAddress, roundIndex);
        setShowModalClaimable(true);
      }
    };

    const calculateClaimable = async (
      beneficiaryAddress: string,
      selectedRound: number
    ) => {
      try {
        const claimable = await contract.methods
          .calculateClaimable(
            beneficiaryAddress.toString(),
            Number(selectedRound.toString())
          )
          .call({ from: address });

        // Ensure the claimable amount is a valid number before performing the division
        const claimableAmount = Number(claimable);
        if (isNaN(claimableAmount)) {
          throw new Error("Invalid claimable amount received");
        }

        const ClaimableDivided = (
          claimableAmount / Math.pow(10, 18)
        ).toString();
        setClaimableAmount(ClaimableDivided);
      } catch (error) {
        console.error("Error calculating claimable amount:", error);
      }
  };
  
    const handleOpenModal = (
      address: string,
      selectedRound: string | null | undefined
    ) => {
      if (selectedRound) {
        const roundIndex = rounds.indexOf(selectedRound);
        if (roundIndex !== -1) {
          // Check if the roundIndex is valid
          calculateInitialClaimable(address, roundIndex);
          setShowModal(true);
        } 
      } else {
        console.error("Selected round is null or undefined.");
      }
    };
  const calculateInitialClaimable = async (
    beneficiaryAddress: string,
    selectedRound: number
  ) => {
    try {
      const initialClaimable = await contract.methods
        .calculateInitialClaimable(beneficiaryAddress.toString(), selectedRound)
        .call({ from: address });

      if (initialClaimable === undefined || initialClaimable === null) {
        throw new Error("Initial claimable amount is undefined or null");
      }

      // Convert the initialClaimable to a string for further processing
      const initialClaimableString = initialClaimable.toString();
      const initialClaimableDivided = (
        parseFloat(initialClaimableString) / Math.pow(10, 18)
      ).toString();
      setInitialClaimableAmount(initialClaimableDivided);
      setShowModal(true);
      setShowModalClaimable(false);
    } catch (error) {
      console.error("Error calculating initial claimable amount:", error);
    }
  };

    useEffect(() => {
      const fetchVestingData = async () => {
        try {
          if (isConnected && address) {
            const vestingData: TokenSchedule[] = await contract.methods
              .getVestingSchedules(address)
              .call();
            setVestingData(
              vestingData.map((item) => ({
                amount: item.amount,
                beneficiary: item.beneficiary,
                claimed: item.claimed,
                cliff: item.cliff,
                end: item.end,
                initialUnlock: item.initialUnlock,
                isInitialClaimed: item.isInitialClaimed,
                round: item.round,
                start: item.start,
              }))
            );
          } else {
            router.push("/");
          }
        } catch (error) {
          console.error("Error fetching vesting data:", error);
        }
      };

      fetchVestingData();
    }, [address]);

    const handleRoundChange = (round: string) => {
      setSelectedRound(round);
      setSubmitted(false);
    };

    const handleSubmit = async () => {
      try {
        if (selectedRound && address) {
          const selectedData = vestingData.find(
            (item) => rounds[Number(item.round)] === selectedRound
          );
          if (selectedData) {
            setData(selectedData);
            updateCalculatedValues(selectedData); // Update the calculated values
            setSubmitted(true);
          } else {
            toast.error(
              `Data not found for the selected round: ${selectedRound}`
            );
          }
        } else {
          console.warn(
            "Selected round or beneficiary address not valid:",
            selectedRound,
            address
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  return (
    <div>
      <div className='container mx-auto px-4 max-w-6xl'>
        <section className='bg-[#0D0D0D] shadow-md rounded-md py-8 px-6'>
          <h2 className='mb-8 text-3xl md:text-5xl lg:text-5xl font-bold text-center  text-[#C980FF] mt-4'>
            Token Details Overview
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
            <div className='bg-[#C980FF] p-6 rounded-[20px] shadow-md text-center overflow-hidden'>
              <p className='text-xl text-white whitespace-nowrap'>
                Total Vested Amount
              </p>
              <p className='text-sm font-bold text-white truncate'>
                {totalVestedAmount}
              </p>
            </div>
            <div className='bg-[#C980FF] p-6 rounded-[20px] shadow-md text-center overflow-hidden'>
              <p className='text-xl text-white whitespace-nowrap'>
                Total Round
              </p>
              <p className='text-sm font-bold text-white truncate'>
                {totalRounds}
              </p>
            </div>
            <div className='bg-[#C980FF] p-6 rounded-[20px] shadow-md text-center overflow-hidden'>
              <p className='text-xl text-white whitespace-nowrap'>
                Claimed Tokens
              </p>
              <p className='text-sm font-bold text-white truncate'>
                {claimedTokens}
              </p>
            </div>
            <div className='bg-[#C980FF] p-6 rounded-[20px] shadow-md text-center overflow-hidden'>
              <p className='text-xl text-white whitespace-nowrap'>
                Unclaimed Tokens
              </p>
              <p className='text-sm font-bold text-white truncate'>
                {unclaimedTokens}
              </p>
            </div>
          </div>
          <div className='text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-center mt-16  mb-16 text-[#C980FF]'>
            <h5 className='font-semibold text-4xl font-montserrat'>
              Per Round Investment
            </h5>
          </div>
          <div className='bg-[#1A1A1A] shadow-md rounded-md py-8 px-6 mb-8'>
            <SelectFieldInvestment
              label='Select Round'
              options={rounds}
              value={selectedRound}
              onChange={handleRoundChange}
              placeholder='Select Round'
            />
            <div className='flex justify-center mb-8'>
              <button
                onClick={handleSubmit}
                className='w-[130px] mt-4 bg-[#C980FF] text-white font-bold py-2 px-4 rounded'
              >
                Submit
              </button>
            </div>
            {submitted && data && (
              <>
                <div className='overflow-x-auto mb-16 mt-16'>
                  <div className='bg-[#C980FF] p-1 rounded-[10px]'>
                    <div className='bg-[#0d0d0d] p-6 rounded-md shadow-md text-white'>
                      <div className='text-center mb-8 mt-8'>
                        <p className='text-2xl text-white md:text-2xl lg:text-3xl'>
                          {selectedRound}
                        </p>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
                        <div className='text-center p-4'>
                          <p className='text-white'>Total Invested Amount</p>
                          <p className='font-bold'>
                            {totalInvestedAmount.toFixed(2)}
                          </p>
                        </div>
                        <div className='text-center p-4'>
                          <p className='text-white'>Start Date</p>
                          <p className='font-bold'>{formatDate(data.start)}</p>
                        </div>
                        <div className='text-center p-4'>
                          <p className='text-white'>Cliff Period</p>
                          <p className='font-bold text-white'>
                            {formatDate(data.cliff)}
                          </p>
                        </div>
                        <div className='text-center p-4'>
                          <p className='text-white'>Vesting End Period</p>
                          <p className='font-bold'>{formatDate(data.end)}</p>
                        </div>
                        <div className='text-center p-4'>
                          <p className='text-white'>Initial Unlocked Amount</p>
                          <p className='font-bold'>
                            {" "}
                            {initialUnlockedAmount.toFixed(2)}
                          </p>
                        </div>
                        <div className='text-center p-4'>
                          <p className='text-white'>
                            Initial Unlock Percentage
                          </p>
                          <p className='font-bold'>
                            {initialUnlockPercentage.toFixed(2)}%
                          </p>
                        </div>
                        <div className='text-center p-4'>
                          <p className='text-white'> Claimed Amount</p>
                          <p className='font-bold text-white'>
                            {claimedAmount.toFixed(2)}
                          </p>
                        </div>
                        <div className='text-center p-4'>
                          <p className='text-white'>Remaining Amount</p>
                          <p className='font-bold'>
                            {remainingAmount.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-center mb-16'>
                  <p className='font-bold text-2xl text-[#C980FF]  md:text-2xl lg:text-3xl'>
                    Calculate Your Investments
                  </p>
                  <p className='text-white mb-4 text-[21px] mt-4 font-semibold'>
                    Click below and get your investment details
                  </p>
                  <div className='flex justify-center space-x-4'>
                    <button
                      className='bg-[#C980FF] text-white py-2 px-4 rounded-[6px]'
                      onClick={() => {
                        if (address) {
                          handleOpenModal(address, selectedRound);
                        } else {
                          console.error("Address is undefined.");
                        }
                      }}
                    >
                      Get Initial Claimable Amount
                    </button>
                    <button
                      className='bg-[#C980FF] text-white py-2 px-4 rounded-[6px]'
                      onClick={() => {
                        if (address) {
                          handleClaimableAmount(address, selectedRound);
                        } else {
                          console.error("Address is undefined.");
                        }
                      }}
                    >
                      Get Claimable Amount
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {showModal && (
            <div className='fixed inset-0 flex items-center justify-center z-50'>
              <div
                className='bg-white opacity-75 w-full h-full absolute'
                onClick={() => setShowModal(false)}
              ></div>
              <div className='bg-white p-8 rounded-lg z-50 w-full max-w-md mx-auto'>
                <h3 className='text-2xl text-black mb-4 text-center'>
                  Initial Claimable Amount
                </h3>
                <p className='text-black text-center mb-4'>
                  {initialClaimableAmount}
                </p>
                <div className='flex justify-center space-x-4'>
                  <button
                    // onClick={() => claimInitialUnlockedTokens(address, rounds.indexOf(selectedRound as string))}
                    onClick={() => {
                      if (address) {
                        claimInitialUnlockedTokens(
                          address,
                          rounds.indexOf(selectedRound as string)
                        );
                      } else {
                        console.error("Address is undefined.");
                        // Optionally, handle the case where address is undefined
                      }
                    }}
                    className={`rounded-[6px] bg-[#C980FF] text-white py-2 px-4 shadow-md ${
                      initialClaimableAmount === "0"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={initialClaimableAmount === "0"}
                  >
                    Claim
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className='bg-[#C980FF] text-white py-2 px-4 rounded-[6px] shadow-md'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          {showModalClaimable && (
            <div className='fixed inset-0 flex items-center justify-center z-50'>
              <div
                className='bg-white opacity-75 w-full h-full absolute'
                onClick={() => setShowModalClaimable(false)}
              ></div>
              <div className='bg-white p-8 rounded-lg z-50 w-full max-w-md mx-auto'>
                <h3 className='text-2xl text-black mb-4 text-center'>
                  {" "}
                  Claimable Amount
                </h3>
                <p className='text-black text-center mb-4'>{claimableAmount}</p>
                <div className='flex justify-center space-x-4'>
                  <button
                    // onClick={() => claim(address, rounds.indexOf(selectedRound as string))}
                    onClick={() => {
                      if (address) {
                        claim(address, rounds.indexOf(selectedRound as string));
                      } else {
                        console.error("Address is undefined.");
                        // Optionally, handle the case where address is undefined
                      }
                    }}
                    className={`rounded-[6px] bg-[#C980FF] text-white py-2 px-4 shadow-md ${
                      claimableAmount === "0"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={claimableAmount === "0"}
                  >
                    Claim
                  </button>
                  <button
                    onClick={() => setShowModalClaimable(false)}
                    className='bg-[#C980FF] text-white py-2 px-4 rounded-[6px] shadow-md'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default TokenCardDetails
