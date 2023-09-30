// Teachable machine link : https://teachablemachine.withgoogle.com/models/aueOcY0_d/




function startrecognition() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aueOcY0_d/model.json',modelReady)
}

const modelReady = () => {
    classifier.classify(gotResults)
}



function gotResults(error, results) {
    if (error){
        console.log(error)
    }
    else{
        console.log(results)
        random_number_r = Math.floor(Math.random()*255) +1 ;
        random_number_g = Math.floor(Math.random()*255) +1 ;
        random_number_b = Math.floor(Math.random()*255) +1 ;
        document.getElementById('label_name').innerHTML = 'I can hear - ' + results[0].label
        document.getElementById('label_confidence').innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + " %"
        document.getElementById('label_name').style.color = `rgb(${random_number_r}, ${random_number_b}, ${random_number_g})`
        document.getElementById('label_confidence').style.color = `rgb(${random_number_r}, ${random_number_b}, ${random_number_g})`
        img = document.getElementById('inner_image')
        if (results[0].label == "Barking"){
            img.src = "dog.png"
        }else if (results[0].label == "Meowing"){
            img.src = "cat.jpg"
        }else if (results[0].label == "Mooing"){
            img.src = "cow.jpg"
        }else if (results[0].label == "Roar"){
            img.src = "lion.jpg"
        }
        
    }
}