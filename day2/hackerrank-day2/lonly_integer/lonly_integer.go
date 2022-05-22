package main

import "fmt"


func LonlyInteger(a []int32) int32{

	var result int32

	for i:=0; i<len(a); i++ {
		result ^= a[i]
	}

	return result
}

func main(){
	fmt.Println("=== lonly integer ======")
	arrInteger := []int32{1,2,3,4,3,2,1}
	fmt.Println( LonlyInteger(arrInteger) )
}