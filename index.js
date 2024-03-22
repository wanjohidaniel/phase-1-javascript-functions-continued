function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(purpose= "go to the office"){
    return `This Monday, I will ${purpose}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }