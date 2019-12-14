TAP version 13
ok 1 - test/test.js # time=1122.296ms {
    # Subtest: 01.01 - delete one object within an array
        ok 1 - 01.01.01 - defaults
        ok 2 - 01.01.02 - strict matching
        ok 3 - 01.01.03 - hungry for whitespace
        ok 4 - 01.01.04 - hungry for whitespace, strict match
        1..4
    ok 1 - 01.01 - delete one object within an array # time=29.951ms
    
    # Subtest: 01.02 - delete one object, involves white space
        ok 1 - 01.02.01 - won't delete because of white space mismatching strictly
        ok 2 - 01.02.02 - won't delete because of strict match is on
        ok 3 - 01.02.03 - will delete because match is not strict and hungry is on
        ok 4 - 01.02.04 - won't delete because of strict match, hungry does not matter
        1..4
    ok 2 - 01.02 - delete one object, involves white space # time=12.904ms
    
    # Subtest: 01.03 - multiple findings, object within array
        ok 1 - 01.03.01
        ok 2 - 01.03.02 - some not deleted because of strict match
        ok 3 - 01.03.03
        ok 4 - 01.03.04 - some not deleted because of strict match
        1..4
    ok 3 - 01.03 - multiple findings, object within array # time=48.156ms
    
    # Subtest: 01.04 - delete object within an arrays
        ok 1 - 01.04.01
        ok 2 - 01.04.02
        ok 3 - 01.04.03
        ok 4 - 01.04.04
        1..4
    ok 4 - 01.04 - delete object within an arrays # time=9.333ms
    
    # Subtest: 01.05 - delete object within an array, wrong order of keys, pt.1
        ok 1 - 01.05.01 - defaults (not strict match, not white space hungry)
        ok 2 - 01.05.02 - strict match
        ok 3 - 01.05.03 - whitespace hungry
        ok 4 - 01.05.04 - white space hungry with strict match
        ok 5 - 01.05.05 - strict match, different input
        1..5
    ok 5 - 01.05 - delete object within an array, wrong order of keys, pt.1 # time=9.548ms
    
    # Subtest: 01.06 - delete object within an array, wrong order of keys, pt.2
        ok 1 - 01.06
        1..1
    ok 6 - 01.06 - delete object within an array, wrong order of keys, pt.2 # time=3.063ms
    
    # Subtest: 01.07 - special case, not strict
        ok 1 - 01.07
        1..1
    ok 7 - 01.07 - special case, not strict # time=1.899ms
    
    # Subtest: 01.08 - special case, strict
        ok 1 - 01.08
        1..1
    ok 8 - 01.08 - special case, strict # time=1.797ms
    
    # Subtest: 01.09 - real-life situation #1
        ok 1 - 01.09
        1..1
    ok 9 - 01.09 - real-life situation #1 # time=8.184ms
    
    # Subtest: 01.10 - real-life situation #2
        ok 1 - 01.10
        1..1
    ok 10 - 01.10 - real-life situation #2 # time=8.777ms
    
    # Subtest: 01.11 - multiple empty values blank arrays #1
        ok 1 - 01.11
        1..1
    ok 11 - 01.11 - multiple empty values blank arrays #1 # time=2.594ms
    
    # Subtest: 01.12 - multiple empty values blank arrays #2
        ok 1 - 01.12
        1..1
    ok 12 - 01.12 - multiple empty values blank arrays #2 # time=2.426ms
    
    # Subtest: 01.13 - object's value is a blank array, looking in an array
        ok 1 - 01.13
        1..1
    ok 13 - 01.13 - object's value is a blank array, looking in an array # time=1.793ms
    
    # Subtest: 01.14 - object's value is a blank array, looking in an object
        ok 1 - 01.14
        1..1
    ok 14 - 01.14 - object's value is a blank array, looking in an object # time=1.772ms
    
    # Subtest: 02.01 - delete object within object - simple #1
        ok 1 - 02.01
        1..1
    ok 15 - 02.01 - delete object within object - simple #1 # time=2.226ms
    
    # Subtest: 02.02 - multiple objects to find - simple #1
        ok 1 - 02.02
        1..1
    ok 16 - 02.02 - multiple objects to find - simple #1 # time=1.981ms
    
    # Subtest: 02.03 - multiple objects to find within objects
        ok 1 - 02.03
        1..1
    ok 17 - 02.03 - multiple objects to find within objects # time=2.242ms
    
    # Subtest: 02.04 - real-life scenario
        ok 1 - 02.04
        1..1
    ok 18 - 02.04 - real-life scenario # time=3.638ms
    
    # Subtest: 02.05 - delete object within object - simple #1
        ok 1 - 02.05
        1..1
    ok 19 - 02.05 - delete object within object - simple #1 # time=1.712ms
    
    # Subtest: 03.01 - the input is the finding
        ok 1 - 03.01.01
        1..1
    ok 20 - 03.01 - the input is the finding # time=1.514ms
    
    # Subtest: 03.02 - the input is boolean
        ok 1 - 03.02
        1..1
    ok 21 - 03.02 - the input is boolean # time=1.395ms
    
    # Subtest: 03.03 - the input is string
        ok 1 - 03.03
        1..1
    ok 22 - 03.03 - the input is string # time=1.401ms
    
    # Subtest: 03.04 - no input - throws
        ok 1 - expected to throw
        ok 2 - expected to throw
        ok 3 - expected to throw
        1..3
    ok 23 - 03.04 - no input - throws # time=3.265ms
    
    # Subtest: 03.05 - the input is the finding (right within array)
        ok 1 - 03.05
        1..1
    ok 24 - 03.05 - the input is the finding (right within array) # time=1.607ms
    
    # Subtest: 03.06 - pt1. empty object to find
        ok 1 - 03.06.01
        ok 2 - 03.06.02
        ok 3 - 03.06.03
        ok 4 - 03.06.04
        1..4
    ok 25 - 03.06 - pt1. empty object to find # time=5.281ms
    
    # Subtest: 03.06 - pt2. empty object to find
        ok 1 - 03.06.05
        ok 2 - 03.06.06 - rare case - both opts on, matching against blank object - will yield positive against other blank objects, disregarding the STRICTLY flag
        ok 3 - 03.06.07
        ok 4 - 03.06.08
        1..4
    ok 26 - 03.06 - pt2. empty object to find # time=8.002ms
    
    # Subtest: 03.06 - pt3. empty object to find
        ok 1 - 03.06.09
        ok 2 - 03.06.10
        ok 3 - 03.06.11
        ok 4 - 03.06.12
        1..4
    ok 27 - 03.06 - pt3. empty object to find # time=8.05ms
    
    # Subtest: 03.07 - to find is undefined - throws
        ok 1 - expected to throw
        1..1
    ok 28 - 03.07 - to find is undefined - throws # time=1.104ms
    
    # Subtest: 03.08 - to find is null - throws
        ok 1 - expected to throw
        1..1
    ok 29 - 03.08 - to find is null - throws # time=1.024ms
    
    # Subtest: 03.09 - to find is string - returns input
        ok 1 - 03.09
        1..1
    ok 30 - 03.09 - to find is string - returns input # time=6.352ms
    
    # Subtest: 04.01 - won't delete object within an array because of strict mode
        ok 1 - 04.01
        1..1
    ok 31 - 04.01 - won't delete object within an array because of strict mode # time=5.197ms
    
    # Subtest: 04.02 - won't find multiple findings because of strict mode
        ok 1 - 04.02
        1..1
    ok 32 - 04.02 - won't find multiple findings because of strict mode # time=1.962ms
    
    # Subtest: 04.03 - strict mode: deletes some and skips some because of strict mode
        ok 1 - 04.03
        1..1
    ok 33 - 04.03 - strict mode: deletes some and skips some because of strict mode # time=2.817ms
    
    # Subtest: 04.04 - won't delete object within an arrays because of strict mode
        ok 1 - 04.04
        1..1
    ok 34 - 04.04 - won't delete object within an arrays because of strict mode # time=2.056ms
    
    # Subtest: 05.01 - recognises array containing only empty space - default
        ok 1 - 05.01.01
        ok 2 - 05.01.02
        1..2
    ok 35 - 05.01 - recognises array containing only empty space - default # time=5.957ms
    
    # Subtest: 05.02 - recognises array containing only empty space - strict
        ok 1 - 05.02.01
        ok 2 - 05.02.02
        1..2
    ok 36 - 05.02 - recognises array containing only empty space - strict # time=10.768ms
    
    # Subtest: 05.03 - recognises array containing only empty space - not found
        ok 1 - 05.03
        1..1
    ok 37 - 05.03 - recognises array containing only empty space - not found # time=2.865ms
    
    # Subtest: 05.04 - two keys in objToDelete - default
        ok 1 - 05.04.01
        ok 2 - expected to throw
        1..2
    ok 38 - 05.04 - two keys in objToDelete - default # time=9.301ms
    
    # Subtest: 05.05 - two keys in objToDelete - strict, not found
        ok 1 - 05.05.01
        ok 2 - 05.05.02
        1..2
    ok 39 - 05.05 - two keys in objToDelete - strict, not found # time=3.338ms
    
    # Subtest: 05.06 - two keys in objToDelete - strict
        ok 1 - 05.06
        1..1
    ok 40 - 05.06 - two keys in objToDelete - strict # time=4.107ms
    
    # Subtest: 05.07 - array with strings containing emptiness - default
        ok 1 - 05.07.01
        ok 2 - 05.07.02
        1..2
    ok 41 - 05.07 - array with strings containing emptiness - default # time=3.663ms
    
    # Subtest: 05.08 - array with strings containing emptiness - strict
        ok 1 - 05.08
        1..1
    ok 42 - 05.08 - array with strings containing emptiness - strict # time=1.994ms
    
    # Subtest: 05.09 - array with strings containing emptiness - strict found
        ok 1 - 05.09.01
        ok 2 - 05.09.02
        1..2
    ok 43 - 05.09 - array with strings containing emptiness - strict found # time=3.005ms
    
    # Subtest: 05.10 - recognises string containing only empty space (queried array)
        ok 1 - 05.10.01
        ok 2 - 05.10.02
        1..2
    ok 44 - 05.10 - recognises string containing only empty space (queried array) # time=8.116ms
    
    # Subtest: 05.11 - recognises string containing only empty space - strict
        ok 1 - 05.11
        1..1
    ok 45 - 05.11 - recognises string containing only empty space - strict # time=2.239ms
    
    # Subtest: 05.12 - recognises string containing only empty space - won't find
        ok 1 - 05.12
        1..1
    ok 46 - 05.12 - recognises string containing only empty space - won't find # time=2.114ms
    
    # Subtest: 05.13 - recognises string containing only empty space - won't find
        ok 1 - 05.13.01
        ok 2 - 05.13.02
        1..2
    ok 47 - 05.13 - recognises string containing only empty space - won't find # time=3.392ms
    
    # Subtest: 05.14 - recognises a string containing only empty space (queried array with empty string)
        ok 1 - 05.14
        1..1
    ok 48 - 05.14 - recognises a string containing only empty space (queried array with empty string) # time=2.206ms
    
    # Subtest: 05.15 - a string containing only empty space (queried array) - strict
        ok 1 - 05.15
        1..1
    ok 49 - 05.15 - a string containing only empty space (queried array) - strict # time=1.844ms
    
    # Subtest: 05.16 - a string containing only empty space (queried array) - not found
        ok 1 - 05.16
        1..1
    ok 50 - 05.16 - a string containing only empty space (queried array) - not found # time=1.836ms
    
    # Subtest: 05.17 - recognises string containing only empty space string (queried empty string)
        ok 1 - 05.17
        1..1
    ok 51 - 05.17 - recognises string containing only empty space string (queried empty string) # time=2.076ms
    
    # Subtest: 05.18 - multiple string values in objToDelete
        ok 1 - 05.18
        1..1
    ok 52 - 05.18 - multiple string values in objToDelete # time=2.078ms
    
    # Subtest: 05.19 - multiple string values in objToDelete - not found
        ok 1 - 05.19
        1..1
    ok 53 - 05.19 - multiple string values in objToDelete - not found # time=8.951ms
    
    # Subtest: 05.20 - multiple string values in objToDelete - strict
        ok 1 - 05.20
        1..1
    ok 54 - 05.20 - multiple string values in objToDelete - strict # time=6.333ms
    
    # Subtest: 05.21 - won't find, queried object with empty string value
        ok 1 - 05.21
        1..1
    ok 55 - 05.21 - won't find, queried object with empty string value # time=6.556ms
    
    # Subtest: 05.22 - recognises array of strings each containing only empty space (queried empty string)
        ok 1 - 05.22
        1..1
    ok 56 - 05.22 - recognises array of strings each containing only empty space (queried empty string) # time=11.462ms
    
    # Subtest: 05.23 - recognises array with multiple strings containing emptiness
        ok 1 - 05.23
        1..1
    ok 57 - 05.23 - recognises array with multiple strings containing emptiness # time=7.14ms
    
    # Subtest: 05.24 - empty array finding empty string
        ok 1 - 05.24
        1..1
    ok 58 - 05.24 - empty array finding empty string # time=2.176ms
    
    # Subtest: 05.25 - empty string finding empty array
        ok 1 - 05.25
        1..1
    ok 59 - 05.25 - empty string finding empty array # time=1.99ms
    
    # Subtest: 05.26 - object deleted from an array, strict mode
        ok 1 - 05.26
        1..1
    ok 60 - 05.26 - object deleted from an array, strict mode # time=1.973ms
    
    # Subtest: 06.01 - real life situation #1
        ok 1 - 06.01
        1..1
    ok 61 - 06.01 - real life situation #1 # time=1.698ms
    
    # Subtest: 06.02 - real life situation #2
        ok 1 - 06.02
        1..1
    ok 62 - 06.02 - real life situation #2 # time=1.84ms
    
    # Subtest: 06.03 - real life situation #3
        ok 1 - 06.03
        1..1
    ok 63 - 06.03 - real life situation #3 # time=4.613ms
    
    # Subtest: 06.04 - real life situation #4
        ok 1 - 06.04
        1..1
    ok 64 - 06.04 - real life situation #4 # time=2.968ms
    
    # Subtest: 06.05 - empty strings within arrays
        ok 1 - 06.05.01 - defaults
        ok 2 - 06.05.02 - hungryForWhitespace
        ok 3 - 06.05.03 - matchKeysStrictly
        ok 4 - 06.05.04 - matchKeysStrictly + hungryForWhitespace
        1..4
    ok 65 - 06.05 - empty strings within arrays # time=9.636ms
    
    # Subtest: 06.06 - strict mode, deletes everything
        ok 1 - 06.06.01
        ok 2 - 06.06.02
        1..2
    ok 66 - 06.06 - strict mode, deletes everything # time=2.313ms
    
    # Subtest: 06.07 - treats holes in arrays - ast-monkey will fix them
        ok 1 - 06.07
        1..1
    ok 67 - 06.07 - treats holes in arrays - ast-monkey will fix them # time=6.251ms
    
    # Subtest: 07.01 - does not mutate input args
        ok 1 - (unnamed test)
        ok 2 - 07.01.01
        ok 3 - 07.01.02
        1..3
    ok 68 - 07.01 - does not mutate input args # time=6.839ms
    
    # Subtest: 08.01 - wrong input args
        ok 1 - expected to throw
        ok 2 - expected to throw
        ok 3 - expected to throw
        ok 4 - expected to throw
        1..4
    ok 69 - 08.01 - wrong input args # time=6.991ms
    
    1..69
    # time=1122.296ms
}

ok 2 - test/umd-test.js # time=42.804ms {
    # Subtest: UMD build works fine
        ok 1 - should be equivalent
        1..1
    ok 1 - UMD build works fine # time=27.906ms
    
    1..1
    # time=42.804ms
}

1..2
# time=3911.637ms