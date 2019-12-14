TAP version 13
ok 1 - test/test.js # time=334.112ms {
    # Subtest: 00.01 - not array
        ok 1 - expected to throw
        ok 2 - expected to throw
        ok 3 - expected to throw
        ok 4 - expected to throw
        1..4
    ok 1 - 00.01 - not array # time=22.676ms
    
    # Subtest: 00.02 - not two arguments in one of ranges
        ok 1 - expected to throw
        ok 2 - expected to throw
        ok 3 - expected to throw
        ok 4 - expected to not throw
        ok 5 - expected to not throw
        ok 6 - expected to not throw
        ok 7 - expected to not throw
        ok 8 - expected to not throw
        1..8
    ok 2 - 00.02 - not two arguments in one of ranges # time=5.089ms
    
    # Subtest: 00.03 - some/all range indexes are not natural numbers
        ok 1 - expected to not throw
        ok 2 - expected to throw
        ok 3 - expected to throw
        ok 4 - expected to throw
        ok 5 - expected to throw
        ok 6 - expected to throw
        ok 7 - expected to throw
        1..7
    ok 3 - 00.03 - some/all range indexes are not natural numbers # time=2.9ms
    
    # Subtest: 01.01 - no ranges given
        ok 1 - 01.01 - copes fine
        1..1
    ok 4 - 01.01 - no ranges given # time=3.338ms
    
    # Subtest: 01.02 - only one range given
        ok 1 - 01.02.01
        ok 2 - 01.02.02
        1..2
    ok 5 - 01.02 - only one range given # time=2.991ms
    
    # Subtest: 01.03 - two ranges
        ok 1 - 01.03.01
        ok 2 - 01.03.02
        ok 3 - 01.03.03
        ok 4 - 01.03.04
        1..4
    ok 6 - 01.03 - two ranges # time=3.276ms
    
    # Subtest: 01.04 - many ranges
        ok 1 - 01.04.01
        ok 2 - 01.04.02
        ok 3 - 01.04.03
        ok 4 - 01.04.04 - same ranges
        ok 5 - 01.04.05 - same ranges
        ok 6 - expected to throw
        ok 7 - 01.04.07
        1..7
    ok 7 - 01.04 - many ranges # time=23.15ms
    
    # Subtest: 02.01 - does not mutate the input arg
        ok 1 - 02.01
        1..1
    ok 8 - 02.01 - does not mutate the input arg # time=1.212ms
    
    # Subtest: 03.01 - readme example #1
        ok 1 - 03.01
        1..1
    ok 9 - 03.01 - readme example #1 # time=2.164ms
    
    # Subtest: 03.02 - readme example #2
        ok 1 - 03.02
        1..1
    ok 10 - 03.02 - readme example #2 # time=1.078ms
    
    # Subtest: 03.03 - readme example #3
        ok 1 - expected to throw
        1..1
    ok 11 - 03.03 - readme example #3 # time=17.777ms
    
    # Subtest: 03.04 - readme example #4
        ok 1 - expected to throw
        1..1
    ok 12 - 03.04 - readme example #4 # time=0.898ms
    
    # Subtest: 03.05 - an extra for readme example #4
        ok 1 - expected to throw
        1..1
    ok 13 - 03.05 - an extra for readme example #4 # time=0.812ms
    
    # Subtest: 03.06 readme example #5
        ok 1 - expected to throw
        1..1
    ok 14 - 03.06 readme example #5 # time=1.181ms
    
    # Subtest: 03.07 readme example #6
        ok 1 - 03.07 - 3rd argument and onwards are ignored
        1..1
    ok 15 - 03.07 readme example #6 # time=1.018ms
    
    # Subtest: 04.01 - calls progress callback correctly
        ok 1 - 04.01.01 - callback fn is null
        ok 2 - 04.01.02 - callback fn is false
        ok 3 - 04.01.03 - empty opts obj
        ok 4 - worked - 11
        ok 5 - worked - 22
        ok 6 - worked - 33
        ok 7 - worked - 44
        ok 8 - 04.01.04 - baseline, no fn to call
        1..8
    ok 16 - 04.01 - calls progress callback correctly # time=12.882ms
    
    1..16
    # time=334.112ms
}

1..1
# time=2627.344ms