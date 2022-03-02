### How Jest works and how it mock stuff?

### How React works

### How NodeJS works

### Why hashmap is constant look up time?

### Is there hashmap in js?

### How boolean value is stored?

### Why are there 1024 bytes in a kilobyte?
Because every memory unit is based on powers of 2, when we scale a bit, we multiply it by how many 2s instead of how many 10s. A kilobyte is defined not as a thousand (as in other conventional measurements), but as 2^10 bytes = 1024 bytes. 1024 is close enough to a thousand to earn the kilo tag.

Bit = 2^1 = 2 states
Byte = 2^8 = 256 states
Kilobyte = 2^10 = 1024 states

### What is a 64-bit computer?
https://en.wikipedia.org/wiki/64-bit_computing

The term 64-bit describes a generation of computers in which 64-bit processors are the norm. 64 bits is a word size that defines certain classes of computer architecture, buses, memory, and CPUs and, by extension, the software that runs on them.

A 64-bit register can hold any of 264 (over 18 quintillion or 1.8×1019) different values. The range of integer values that can be stored in 64 bits depends on the integer representation used. With the two most common representations, the range is 0 through 18,446,744,073,709,551,615 (264 − 1) for representation as an (unsigned) binary number, and −9,223,372,036,854,775,808 (−263) through 9,223,372,036,854,775,807 (263 − 1) for representation as two's complement. Hence, a processor with 64-bit memory addresses can directly access 264 bytes (16 exbibytes or EiB) of byte-addressable memory. With no further qualification, a 64-bit computer architecture generally has integer and addressing processor registers that are 64 bits wide, allowing direct support for 64-bit data types and addresses.

64-bit is NOT 2^6 (64 zeros or ones), but instead it means 2^64, 18 446 744 073 709 551 616 different values.

Registers are the high-speed accessible storage elements. The processor accesses the registers within one CPU clock cycle. In fact, the processor can decode the instructions and perform operations on the register contents at the rate of more than one operation per CPU clock cycle. So we can say that processor can access registers faster than the main memory.

The register is measured in bits like a processor may have 16-bit, 32-bit, or 64-bit registers. The number of register bits specifies the speed and power of CPU. For example, a CPU which has 32-bit register can access the 32-bit instructions at a time. The CPU which has 64-bit register can execute 64-bit instructions. Hence, more the number of bits of register more is the speed and power of CPU.
 
### How to know how many bytes is a string?
The number of bytes a string takes up is equal to the number of characters in the string plus 1 (the terminator), times the number of bytes per character. The number of bytes per character can vary. It is 1 byte for a regular char type.

### What is integer overflow (算术溢出)?

### 负数为什么要用补码来表示？
https://blog.csdn.net/qq_26542493/article/details/103412406
https://blog.csdn.net/qq_26542493/article/details/103428211
https://zhuanlan.zhihu.com/p/61628231

### 为什么0.1+0.2=0.30000000000000004
https://blog.csdn.net/qq_26542493/article/details/103412406
https://0.30000000000000004.com/

### How to convert between decimal and binary
https://www.log2base2.com/number-system/binary-number-system.html
https://www.log2base2.com/number-system/float-to-binary-conversion.html

### Statically typed language

### What is modulo 2**256

### What is byte masking

