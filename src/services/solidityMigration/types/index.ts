//types for the move migration module
import { UseCaseEnum } from '../../../enums/useCasesEnum'

// full input of from the application editor
export interface ISolidityGenrator {
    name: string
    symbol: string
    useCase: UseCaseEnum
    limited: number // enforce same standard
    limitedMessage: string
    royalties?: number// activate royalties on the NFT - must be positive number
    // represeting the % the creator receives. 10 == 10%
    adminMint?: boolean // users of dapp mint the tokens themselves or
    // admin mints the tokens
    contractFunctionality: IContractFunctionality[]
}

// singular functionality received from the application editor
export interface IContractFunctionality {

}