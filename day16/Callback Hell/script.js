  // Initial countdown value
  let count = 10

  // Function to update the countdown and display it
  const updateCountdown = (value, callback) => {
      setTimeout(() => {
          document.getElementById('countdown').textContent = value
          callback(value - 1)
      }, 1000)
  }

  // Start the countdown
  updateCountdown(count, function (newCount) {
      updateCountdown(newCount, function (newCount) {
          updateCountdown(newCount, function (newCount) {
              updateCountdown(newCount, function (newCount) {
                  updateCountdown(newCount, function (newCount) {
                      updateCountdown(newCount, function (newCount) {
                          updateCountdown(newCount, function (newCount) {
                              updateCountdown(newCount, function (newCount) {
                                  updateCountdown(newCount, function (newCount) {
                                        updateCountdown(newCount, function(newCount){
                                            updateCountdown(newCount, function(newCount){
                                                // When countdown reaches 1, display the message
                                                document.getElementById('countdown').textContent = "Happy Independence Day!"
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })