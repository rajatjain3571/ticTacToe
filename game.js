// color chanhe header

var p = document.querySelector('p');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeColor(){
  colors=getRandomColor()
  p.style.color=colors;
}




// Restart game

var restart = document.querySelector('#b');


// grab all the squares

var squares = document.querySelectorAll('td');

// clear all the squares
var chance=true;
function clearSquares(){
  for(var i =0;i<squares.length;i++)
    {
      squares[i].textContent = '';
    }
    chance=true;
}

// mark x o

function changeValue(){
    if(this.textContent==='' && chance===true)
    {
      this.textContent='X';
      chance=false;
    }
    else if(this.textContent==='' && chance===false)
    {
      this.textContent='O';
      chance=true;
    }
    checkWin();
}

//win loose

function checkWin()
  {

    if(squares[0].textContent===squares[1].textContent &&squares[1].textContent ===squares[2].textContent && squares[2].textContent==='X')
    {
      alert('Player X Won');
      clearSquares();
    }
    else if(squares[3].textContent===squares[4].textContent &&squares[4].textContent ===squares[5].textContent && squares[5].textContent==='X')
    {
      alert('Player X Won');
      clearSquares();
    }
    else if(squares[6].textContent===squares[7].textContent &&squares[7].textContent ===squares[8].textContent && squares[8].textContent==='X')
    {
      alert('Player X Won');
      clearSquares();
    }
    else if(squares[0].textContent===squares[4].textContent &&squares[4].textContent ===squares[8].textContent && squares[8].textContent==='X')
    {
      alert('Player X Won');
      clearSquares();
    }
    else if(squares[2].textContent===squares[4].textContent &&squares[4].textContent ===squares[6].textContent && squares[6].textContent==='X')
    {
      alert('Player X Won');
      clearSquares();
    }
    else if(squares[0].textContent===squares[3].textContent &&squares[3].textContent ===squares[6].textContent && squares[6].textContent==='X')
    {
      alert('Player X Won');
      clearSquares();
    }
    else if(squares[1].textContent===squares[4].textContent &&squares[4].textContent ===squares[7].textContent && squares[7].textContent==='X')
    {
      alert('Player X Won');
      clearSquares();
    }
    else if(squares[2].textContent===squares[5].textContent &&squares[5].textContent ===squares[8].textContent && squares[8].textContent==='X')
    {
      alert('Player X Won');
      clearSquares();
    }
    else if(squares[0].textContent===squares[1].textContent &&squares[1].textContent ===squares[2].textContent && squares[2].textContent==='O')
    {
      alert('Player O Won');
      clearSquares();
    }
    else if(squares[3].textContent===squares[4].textContent &&squares[4].textContent ===squares[5].textContent && squares[5].textContent==='O')
    {
      alert('Player O Won');
      clearSquares();
    }
    else if(squares[6].textContent===squares[7].textContent &&squares[7].textContent ===squares[8].textContent && squares[8].textContent==='O')
    {
      alert('Player O Won');
      clearSquares();
    }
    else if(squares[0].textContent===squares[4].textContent &&squares[4].textContent ===squares[8].textContent && squares[8].textContent==='O')
    {
      alert('Player O Won');
      clearSquares();
    }
    else if(squares[2].textContent===squares[4].textContent &&squares[4].textContent ===squares[6].textContent && squares[6].textContent==='O')
    {
      alert('Player O Won');
      clearSquares();
    }
    else if(squares[0].textContent===squares[3].textContent &&squares[3].textContent ===squares[6].textContent && squares[6].textContent==='O')
    {
      alert('Player O Won');
      clearSquares();
    }
    else if(squares[1].textContent===squares[4].textContent &&squares[4].textContent ===squares[7].textContent && squares[7].textContent==='O')
    {
      alert('Player O Won');
      clearSquares();
    }
    else if(squares[2].textContent===squares[5].textContent &&squares[5].textContent ===squares[8].textContent && squares[8].textContent==='O')
    {
      alert('Player O Won');
      clearSquares();
    }
    else{

      for(var i =0; i<squares.length;i++)
      {
        if(squares[i].textContent===''){
          break;
        }
        if(i===squares.length-1)
        {
          alert("Match Drawn");
        }

      }
    }


  }



// event listeners
restart.addEventListener('click',clearSquares);
for(var i =0 ; i<squares.length;i++)
{
  squares[i].addEventListener('click',changeValue);
}
setInterval("changeColor()",500);
