const $ =document.querySelector.bind(document)
const $$ =  document.querySelectorAll.bind(document)
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const player = $('.player')
const audio = $('#audio')
const cd = $('.cd') 
const playBtn = $('.btn-toggle-play');
const btnNext = $('.btn-next')
const btnPrev = $('.btn-prev')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')
const progress = $('#progress')
const playList = $('.playlist')


const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,

  songs: [
    {
      name: 'Răng khôn',
      singer: 'Ngọc nusi',
      path: './audioclip-1621308688000-57656.mp4',
      image: './45571195_792921177766270_3356311285904965632_n.jpg',
    },
    {
      name: 'Light It Up',
      singer: 'Robin Hustin x TobiMorrow',
      path: 'https://aredir.nixcdn.com/NhacCuaTui968/LightItUp-RobinHustinTobimorrowJex-5619031.mp3?st=kzpVQ5kKnf2LlcAqM6lnxg&e=1623143881',
      image: 'https://avatar-ex-swe.nixcdn.com/song/2019/01/08/1/3/d/a/1546913843457_640.jpg',
    },
    {
      name: 'Yoru ni kakeru',
      singer: 'YOASOBI',
      path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
    },
    {
      name: 'Muộn rồi mà sao còn',
      singer: 'Sơn Tùng M-TP',
      path: 'https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=w9AA-eyRI7yD_VYGfvVWeQ&e=1623141624',
      image: 'https://pbs.twimg.com/media/Ez5jRyVVgAQN6Kh.jpg',
    },
    {
      name: 'See You Again',
      singer: 'Charlie Puth ft Wiz Khalifa',
      path: 'https://aredir.nixcdn.com/NhacCuaTui894/SeeYouAgain-KurtSchneiderEppicAlexGoot-3888930.mp3?st=1q73myBS8FKr8Rx0snpMJw&e=1623144094',
      image: 'https://nghiennhac.com/wp-content/uploads/2020/09/see-you-again-0.jpg',
    },
   
    {
      name: 'Symphony',
      singer: 'Clean Bandit',
      path: 'https://aredir.nixcdn.com/Sony_Audio37/Symphony-CleanBanditZaraLarsson-4822950.mp3?st=sPgJSXtRXYpT_rznXyez6g&e=1623144426',
      image: 'https://i.ytimg.com/vi/PIf9GvWaxQQ/maxresdefault.jpg',
    },
    {
      name: 'Waiting For Love',
      singer: 'Avicii',
      path: 'https://aredir.nixcdn.com/Unv_Audio45/WaitingForLove-Avicii-4203283.mp3?st=mXGv6kIqbxg_coAyUqzlnw&e=1623144462',
      image: 'https://i.ytimg.com/vi/Hmbm3G-Q444/maxresdefault.jpg',
    },
    {
      name: 'Alone',
      singer: 'Marshmello',
      path: 'https://aredir.nixcdn.com/NhacCuaTui927/Alone-Marshmello-4456939.mp3?st=RTsMC9tNcKEi8fd0iKtdaA&e=1623144502',
      image: 'https://i.ytimg.com/vi/UNB8F0ObA4g/maxresdefault.jpg',
    },
    {
      name: 'Something Just Like This',
      singer: 'The Chainsmokers & Coldplay',
      path: 'https://aredir.nixcdn.com/Sony_Audio39/SomethingJustLikeThis-TheChainsmokersColdplay-5337136.mp3?st=VQuH6VgNsPlBizbk-c7n3w&e=1623144556',
      image: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/07/a/1/4/5/1510038809679_640.jpg',
    },
    {
      name: 'Sugar',
      singer: 'Maroon 5',
      path: 'https://aredir.nixcdn.com/Unv_Audio73/Sugar-Maroon5-3338455.mp3?st=3FUWEyikJePPeAuREUcw9g&e=1623144644',
      image: 'https://i.ytimg.com/vi/7vw84EkHOlY/maxresdefault.jpg',
    },
  ],   
  render: function() {
    const htmls = this.songs.map((item,index) => {
        return `        
          <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
            <div class="thumb"
                style="
                background-image: url('${item.image}');">
            </div>
            <div class="body">
                <h3 class="title">${item.name}</h3>
                <p class="author">${item.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>`;
    })
    playList.innerHTML = htmls.join('');
  },
  defineProperties: function() {
        Object.defineProperty(this, 'currentSong' , {
            get: function() {
              return this.songs[this.currentIndex];
            }
        })
  },
  handleEvents: function(){  
        const cdWidth = cd.offsetWidth;
        const __this=this;
        //Xử lý dể Đĩa CD Quay 
        const cdThumbanimate = cdThumb.animate([  // chuyền 2 đối số {transfrom} và {duration,...}
         { transform : 'rotate(360deg)'} // để quay 360 độ
        ],{
          duration: 10000,// 10s // thời gian
          iterations: Infinity,
        })
        cdThumbanimate.pause();
        // Xử lý phóng to thu nhỏ
        
        document.onscroll=function(){     
          const scrollTop = window.scrollY || document.documentElement.scrollTop // lấy về px khi kéo lên xuống 
          const newCdWidth = cdWidth -scrollTop;

          cd.style.width = newCdWidth > 0 ?  newCdWidth +'px' : 0;
          cd.style.opacity  = newCdWidth / cdWidth

        }
        //Xử lý khi click PLAY
        playBtn.onclick = function() {
          if(app.isPlaying){
              audio.pause();
          }
          else{
              audio.play();
          }
         
        }
        //khi song duoc play
        audio.onplay = function() {
          app.isPlaying = true;
          player.classList.add('playing')
          cdThumbanimate.play();
        }
        //khi song duoc pause
        audio.onpause = function() {
          app.isPlaying = false;
          player.classList.remove('playing')
          cdThumbanimate.pause();
        }
        // khi tien do bai hat thay doi 
        audio.ontimeupdate =function() {
          const progressPercent = Math.floor(audio.currentTime/audio.duration * 100)
            if(audio.duration){
              
              progress.value = progressPercent
            }
        }
        // xử lý khi tua song
        progress.onchange = function(e){
            const seekTime = audio.duration / 100  * e.target.value;
            audio.currentTime = seekTime
        }
        //Xử lý khi bài hát được next 
        btnNext.onclick =function() {
          if(__this.isRandom){
           __this.randomSong()
          }
          else{
            __this.nextSong();
          }
          audio.play()
          __this.render();
          __this.scrollToAcvitesong();
        }
        //Xử lý khi bài hát được Prev 
        btnPrev.onclick =function() {
          if(__this.isRandom){
            __this.randomSong()
           }
           else{
             __this.prevSong();
           }
           
           audio.play()
           __this.render();
           __this.scrollToAcvitesong();
        }

     
         //xwr lý khi bài  hát random 
         btnRandom.onclick= function() {
           __this.isRandom = !__this.isRandom
            btnRandom.classList.toggle('active',__this.isRandom)
        }
        //xwr lý khi bài  hát repate 
        btnRepeat.onclick= function() {
          __this.isRepeat = !__this.isRepeat
          btnRepeat.classList.toggle('active',__this.isRepeat)
       }
        //Xử lý sang bài khác khi bài hát kết thúc
        audio.onended = function() {
          if(__this.isRepeat){
            audio.play();
          }
          else{
            btnNext.click();
          }
        }
        //xử lý khi click vào danh sách để chon bài hát
        playList.onclick = function(e) {
          const songNode = e.target.closest('.song:not(.active)')
          if(songNode||e.target.closest('.option')){ // khi click vào danh sanh trừ thằng đang chạy ( active)
            // xử lý khi click vào song
              if(songNode){
                  __this.currentIndex = Number(songNode.dataset.index) //  songNode.dataset.index là chuỗi phải convert sang number
                  __this.loadcurrentSong();
                  audio.play();
                  __this.render();
              }
              
            // xử lý khi click vào options
          }

          
        }
        

  },
  scrollToAcvitesong :function() {
    setTimeout(()=>{
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    },300)

  },
  loadcurrentSong: function() {

    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    audio.src = this.currentSong.path

  },
  nextSong: function() {

    this.currentIndex++;
    if(this.currentIndex>=this.songs.length){
      this.currentIndex=0;
    }
    this.loadcurrentSong();
  },
  prevSong: function() {

    this.currentIndex--;
    if(this.currentIndex<0){
      this.currentIndex=0;
    }
   this.loadcurrentSong();
  },
  randomSong: function() {
    let newIndex
    do{

      newIndex = Math.floor(Math.random() * this.songs.length)

    }while(newIndex === this.currentIndex)
    
    this.currentIndex = newIndex
    this.loadcurrentSong();
  },

  start : function() {
    // Định nghĩa các thuộc tính cho object
    this.defineProperties();

    //Lắng nghe / xử lý các sự kiên { domevent}
    this.handleEvents();
    
    //Tải thông tin bài hát đầu tiên vào ui khi chạy

    this.loadcurrentSong();

    this.render();
  }

}
app.start();
