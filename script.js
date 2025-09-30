body {
  text-align: center;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #ffdde1, #ee9ca7);
  overflow-x: hidden;
}

h1 {
  margin-top: 30px;
  color: #222;
}

.cake {
  margin: 40px auto;
  width: 200px;
  height: 150px;
  background: #f8c291;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.candles {
  display: flex;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
}

.candle {
  width: 15px;
  height: 60px;
  background: #fff;
  border-radius: 5px;
  position: relative;
}

.flame {
  width: 10px;
  height: 20px;
  background: orange;
  border-radius: 50% 50% 50% 50%;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  animation: flicker 0.3s infinite alternate;
}

@keyframes flicker {
  from { transform: translateX(-50%) scaleY(1); opacity: 1; }
  to { transform: translateX(-50%) scaleY(0.8); opacity: 0.8; }
}

.smoke {
  width: 6px;
  height: 20px;
  background: transparent;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.smoke.show {
  animation: rise 2s ease-out forwards;
}

@keyframes rise {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-40px); }
}

.controls {
  margin: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  background: #ff6b81;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
}

button:hover {
  background: #ff4757;
}

/* Lights animation */
.lights {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(255,255,0,0.2) 10%, transparent 10%) repeat;
  background-size: 80px 80px;
  animation: twinkle 1s infinite alternate;
}

@keyframes twinkle {
  from { opacity: 0.5; }
  to { opacity: 1; }
}
