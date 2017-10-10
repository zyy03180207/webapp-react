let initialState ={
	tabData:[{icon:'icon-hzl-home',clr:'#33333',title:'首页',url:'/home'},
	         {icon:'icon-hzl-mine',clr:'#eb4f38',title:'我的',url:'/mine'},],
	topData:[{icon:'icon-hzl_code',clr:'#FFFFFF',title:'二维码收款',url:'/qrcode'},
	         {icon:'icon-hzl_quick',clr:'#FFFFFF',title:'快捷收款',url:'/quick'},],
	funData:[{icon:'icon-hzl_top',clr:'#eb4f38',title:'手机充值',url:''},
	         {icon:'icon-hzl_flow',clr:'#eb4f38',title:'流量充值',url:''},
	         {icon:'icon-hzl_living',clr:'#eb4f38',title:'生活缴费',url:''},
	         {icon:'icon-hzl_approve',clr:'#00bb9c',title:'实名认证',url:''},
	         {icon:'icon-payment_icon',clr:'#56abe4',title:'我的台签码',url:''},
	         {icon:'icon-hzl_promation',clr:'#56abe4',title:'交易额度提升',url:''},
	         {icon:'icon-hzl-pepayment',clr:'#eb4f38',title:'信用卡还款',url:''},
	         {icon:'icon-hzl-application',clr:'#00bb9c',title:'信用卡申请',url:''},],
}
export const UPDATE_TAB = 'UPDATE_TAB';
export const UPDATE_TOP = 'UPDATE_TOP';
export const UPDATE_FUN = 'UPDATE_FUN';
export const updateGlobal = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_TAB":
            return {
                ...state,
                tabData: action.tabData
            }
        case "UPDATE_TOP":
            return {
                ...state,
                topData: action.topData
            }
        case "UPDATE_FUN":
            return {
                ...state,
                funData: action.funData
            }
        default:
            return state
    }
}