import request from '../utils/request';

export const fetchData = (startTime:any) => {
    return request({
        url: 'http://localhost:8085/getHistoryByMonth?startTime=' + startTime,
        method: 'get'
    });
};

export const fetchData1 = () => {
    return request({
        url: 'http://localhost:8085/getHistoryByNowWeek',
        method: 'get'
    });
};

export const fetchData2 = (endTime:any) => {
    return request({
        url: 'http://localhost:8085/getHistoryByWeek?endTime=' + endTime,
        method: 'get'
    });
};

export const getRankOfKeyword = () => {
    return request({
        url: 'http://localhost:8085/rank',
        method: 'get'
    });
};

//1.查询所有关键词的总搜索次数接口
export const getAllSearchTimes = () => {
    return request({
        url: 'http://localhost:8088/keySearch/searchTimes',
        method: 'get'
    })
};

//2.查询所有系统消息的条数接口
export const getAllOperation = () => {
    return request({
        url: 'http://localhost:8088/operation/total',
        method: 'get'
    })
};


//3.查询前五个热词的列表的接口
export const getHotWords = () => {
    return request({
        url: 'http://localhost:8088/keySearch/hotWords',
        method: 'get'
    })
};
//4.查询从某个时间到现在的历史记录的接口
export const getHistorySearchTime = (startTime:any) => {
    return request({
        url: 'http://localhost:8088/history/searchTime?searchTime=' + startTime,
        method: 'get'
    })
};

//5.查询所有的关键词记录的接口
export const getAllKeySearch = () => {
    return request({
        url: 'http://localhost:8088/keySearch',
        method: 'get'
    })
};

//6.查询从某个时间到某个时间的关键词记录的接口
export const getKeywordByTime = (startTime:any, endTime:any) => {
    return request({
        url: 'http://localhost:8088/keySearch/searchTime?startTime=' + startTime +"&&endTime=" + endTime,
        method: 'get'
    });
};

//7.查询所有竞争关键词记录的接口
export const getAllComp = () => {
    return request({
        url: 'http://localhost:8088/comp',
        method: 'get'
    })
};

//8.根据某一个关键词名查询竞争关键词记录的接口
export const getAllCompByName = (compWord:any) => {
    return request({
        url: 'http://localhost:8088/comp/'+compWord,
        method: 'get'
    })
};

//9.获取所有用户的接口
export const getAllUsers = () => {
    return request({
        url: 'http://localhost:8088/user',
        method: 'get'
    })
};

//10.删除用户
export const deleteUserById = (userid:any) => {
    return request({
        url: 'http://localhost:8088/user/'+userid,
        method: 'delete'
    })
}

//11.修改用户
export const putUser = (id:any,username:any,password:any) => {
    return request({
        url: 'http://localhost:8088/user?id=' + id + "&&username=" + username + "&&password=" + password,
        method: 'put'
    })
}

//12.增加用户
export const postUser = (username:any,password:any) => {
    return request({
        url: 'http://localhost:8088/user?username=' + username + "&&password=" + password,
        method: 'post'
    })
}

//13.根据用户名查询用户
export const getUserByName = (username:any) => {
    return request({
        url: 'http://localhost:8088/user/'+username,
        method: 'get'
    })
}

//14.根据种子关键词获取竞争性关键词
export const getCompKeyWords = (keywords:any) => {
    return request({
        url: 'http://localhost:8088/user/search?keyword='+keywords,
        method: 'get',
        timeout: 200000
    })
}

//15.获取数据
export const getDataCompSearchVO = () => {
    return request({
        url: 'http://localhost:8088/user/search/comp',
        method: 'get',
        timeout: 20000
    })
}

//16.评分
export const pingFen = (a:any,b:any,c:any,d:any,e:any,f:any,g:any,h:any,i:any,j:any) => {
    return request({
        url: 'http://localhost:8088/user/score?a='+a+'&&b='+b+'&&c='+c+'&&d='+d+'&&e='+e+'&&f='+f+'&&g='+g+'&&h='+h+'&&i='+i+'&&j='+j,
        method: 'post',
        timeout: 20000
    })
}

//17.历史记录获取
export const getHistory = () => {
    return request({
        url: 'http://localhost:8088/user/history?userid=2',
        method: 'get',
        timeout: 20000
    })
}




export const fetchDataByWord = (CompKey:any) => {
    return request({
        url: 'http://localhost:8085/comp/getCompList/' + CompKey,
        method: 'get'
    });
};


