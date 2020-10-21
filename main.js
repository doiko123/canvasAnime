'use strict'

const intervalID = window.setInterval(changeRandomColor, 100)

function changeRandomColor() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  let yCoordinate = 0
  const totalRows = 8

  for (let r = 0; r < totalRows; r++) {
    generateSquareRow(yCoordinate)
    yCoordinate += 50

    function generateSquareRow(yCoordinate) {
      let xCoordinate = 0
      const squareWidth = 50
      const squareHeight = 50
      const totalElementsInRow = 8

      for (let n = 0; n < totalElementsInRow; n++) {
        ctx.fillStyle = randomColorCode()
        ctx.fillRect(xCoordinate, yCoordinate, squareWidth, squareHeight)
        xCoordinate += 50
      }

      // 肌色バージョンはこちら
      // function randomColorCode() {
      //   const randomColorArray = ['#F7C39C', '#EAB68F', '#F7C3A9', '#F7D0A9', '#F7D0C3', '#EAA98F']
      //   let randomColor = randomColorArray[getRandomColor()]

      //   function getRandomColor() {
      //     return Math.floor(randomColorArray.length * Math.random())
      //   }

      //   return randomColor
      // }

      function randomColorCode() {
        let randomColor = '#'
        const numberOfColorCode = 6
        const hexadecimal = 16

        for (let i = 0; i < numberOfColorCode; i++) {
          randomColor += generateHexCharacter()
        }

        function generateHexCharacter() {
          return Math.floor(hexadecimal * Math.random()).toString(16)
        }

        return randomColor
      }
    }
  }
}