SELECT merek, COUNT(model) FROM ponsel WHERE dual_sim = true GROUP BY merek
