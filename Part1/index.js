let gameProgress = []

function play(id){
    let playerSpan = document.getElementById("player")
    let clickedId = document.getElementById(id)
    
    
    if(playerSpan.innerText === "X"){
        playerSpan.innerText = "O"
        clickedId.innerText = "X"
        gameProgress.push("X")
        console.log(gameProgress)
        
    }else{
        playerSpan.innerText = "X"
        clickedId.innerText = "O"
        gameProgress.push("O")
        gameProgress[id] = "0"
        console.log(gameProgress)
        
    }
    let topLeft = gameProgress[0]
    let topMiddle = gameProgress[1]
    let topRight = gameProgress[2]
    let middleLeft = gameProgress[3]
    let center = gameProgress[4]
    let middleRight = gameProgress[5]
    let bottomLeft =gameProgress[6]
    let bottomMiddle = gameProgress[7]
    let bottomRight = gameProgress[8]
    console.log(gameProgress)
    if(topRight !== undefined && topRight === topMiddle && topRight === topLeft){
        alert(`Congrats ${topRight} is the winner!`)
    }
    if(middleRight !== undefined && middleRight === center && middleRight === middleLeft){alert(`Congrats ${topRight} is the winner!`)
}
    if(bottomRight !== undefined && bottomRight === bottomMiddle && bottomRight === bottomLeft){alert(`Congrats ${topRight} is the winner!`)
}
    if(topRight !== undefined && topRight === middleRight && topRight === bottomLeft){alert(`Congrats ${topRight} is the winner!`)
}
    if(topMiddle !== undefined && topMiddle === center && topMiddle === bottomMiddle){alert(`Congrats ${topRight} is the winner!`)
}
    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){alert(`Congrats ${topRight} is the winner!`)
}
    if(topRight !== undefined && topRight === center && topRight === bottomLeft){alert(`Congrats ${topRight} is the winner!`)
}
    if(topLeft !== undefined && topLeft === center && topLeft === topRight){alert(`Congrats ${topRight} is the winner!`)
}
        console.log("Worked")
    }//console.log(gameProgress[0])
    // console.log(gameProgress[1])
    console.log(topLeft)

