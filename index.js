var omikuji;
var n;
n = Math.floor(Math.random() * 7);
switch (n) {
    case 0:
        omikuji = "大吉です。今年は安泰です。良かったですね！ラッキーアイテムはウサギのカバン。";
        break;
    case 1:
        omikuji = "吉です。今年は良い年になるでしょう。ラッキーアイテムはウサギの服。";
        break;
    case 2:
        omikuji = "中吉です。今年はあなたの努力次第でもっと良い年になるでしょう。ラッキーアイテムはウサギのカレンダー。";
        break;
    case 3:
        omikuji = "小吉です。今年は一つ一つのことを大切にしていきましょう。あまり多くを求めすぎないように。ラッキーアイテムウサギのは電卓。";
        break;
    case 4:
        omikuji = "末吉です。これからに期待です。今年は日々精進しましょう。ラッキーアイテムはウサギのシャープペンシル。";
        break;
    case 5:
        omikuji = "凶です。今年は調子に乗り過ぎずに、様々なことに注意しましょう。ラッキーアイテムはウサギの時計。";
        break;
    default:
        omikuji = "大凶です。今は落ちるところまで落ちているので、後は上がるだけ！ラッキーアイテムはウサギのメモ帳。";
}
console.log("2023年のあなたの運勢は" + omikuji);
