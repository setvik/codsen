TAP version 13
ok 1 - test/test.js # time=298.05ms {
    # Subtest: 01.01 - [36mtraverse[39m - use traverse to delete one key from an array
        ok 1 - 01.01.01
        ok 2 - 01.01.02
        ok 3 - 01.01.03
        1..3
    ok 1 - 01.01 - [36mtraverse[39m - use traverse to delete one key from an array # time=26.672ms
    
    # Subtest: 01.02 - [36mtraverse[39m - more deletion from arrays
        ok 1 - 01.02
        1..1
    ok 2 - 01.02 - [36mtraverse[39m - more deletion from arrays # time=2.403ms
    
    # Subtest: 01.03 - [36mtraverse[39m - use traverse, passing null, write over values
        ok 1 - 01.03
        1..1
    ok 3 - 01.03 - [36mtraverse[39m - use traverse, passing null, write over values # time=23.245ms
    
    # Subtest: 01.04 - [36mtraverse[39m - traverse automatically patches up holes in arrays
        ok 1 - 01.04
        1..1
    ok 4 - 01.04 - [36mtraverse[39m - traverse automatically patches up holes in arrays # time=1.336ms
    
    # Subtest: 01.05 - [36mtraverse[39m - delete key-value pair from plain object in root
        ok 1 - 01.05
        1..1
    ok 5 - 01.05 - [36mtraverse[39m - delete key-value pair from plain object in root # time=1.557ms
    
    # Subtest: 01.06 - [36mtraverse[39m - only traversal, #1
        ok 1 - a
        ok 2 - a.0
        ok 3 - a.1
        ok 4 - a.2
        ok 5 - (unnamed test)
        1..5
    ok 6 - 01.06 - [36mtraverse[39m - only traversal, #1 # time=2.787ms
    
    # Subtest: 01.07 - [36mtraverse[39m - only traversal, #2
        ok 1 - a
        ok 2 - a.b
        ok 3 - a.b.c
        ok 4 - a.b.d
        ok 5 - a.b.e
        ok 6 - a.f
        ok 7 - a.f.g
        ok 8 - a.f.g.h
        ok 9 - a.f.g.h.0
        ok 10 - a.f.g.h.1
        ok 11 - a.f.g.h.2
        ok 12 - a.f.g.i
        ok 13 - a.f.g.i.0
        ok 14 - a.f.g.i.1
        ok 15 - a.f.g.i.2
        ok 16 - a.f.g.i.2.j
        ok 17 - a.f.g.l
        ok 18 - a.f.g.l.0
        ok 19 - a.f.g.l.1
        ok 20 - a.f.g.l.2
        ok 21 - (unnamed test)
        1..21
    ok 7 - 01.07 - [36mtraverse[39m - only traversal, #2 # time=29.395ms
    
    # Subtest: 01.08 - [36mtraverse[39m - only traversal, #3
        ok 1 - 0
        ok 2 - 1
        ok 3 - 2
        ok 4 - 2.a
        ok 5 - (unnamed test)
        1..5
    ok 8 - 01.08 - [36mtraverse[39m - only traversal, #3 # time=2.355ms
    
    # Subtest: 02.01 - [31mstopping[39m - objects - a reference traversal
        ok 1 - should be equivalent
        1..1
    ok 9 - 02.01 - [31mstopping[39m - objects - a reference traversal # time=1.294ms
    
    # Subtest: 02.02 - [31mstopping[39m - objects - after "b"
        ok 1 - should be equivalent
        1..1
    ok 10 - 02.02 - [31mstopping[39m - objects - after "b" # time=1.209ms
    
    # Subtest: 02.03 - [31mstopping[39m - arrays - a reference traversal
        ok 1 - should be equivalent
        1..1
    ok 11 - 02.03 - [31mstopping[39m - arrays - a reference traversal # time=7.419ms
    
    # Subtest: 02.04 - [31mstopping[39m - arrays - after "b"
        ok 1 - should be equivalent
        1..1
    ok 12 - 02.04 - [31mstopping[39m - arrays - after "b" # time=1.092ms
    
    1..12
    # time=298.05ms
}

ok 2 - test/umd-test.js # time=19.247ms {
    # Subtest: UMD build works fine
        ok 1 - should be equivalent
        1..1
    ok 1 - UMD build works fine # time=12.569ms
    
    1..1
    # time=19.247ms
}

1..2
# time=2622.567ms