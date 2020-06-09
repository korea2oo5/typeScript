const NTCID = 'notice/NTCID' as const

export const getNtc = (data: any) => ({
    type: NTCID,
    data
});

type NtcAction = ReturnType<typeof getNtc>

type IdState = {
    data: number
}

const idInitialState = {
    data : 0,
}

export default function reducer(state: IdState = idInitialState, action: NtcAction) {
    switch (action.type) {
        case NTCID:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

