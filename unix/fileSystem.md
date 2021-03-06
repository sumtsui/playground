# Filesystem Layout

------

## FHS 

The Linux Foundation administers the Filesystem Hierarchy Standard, the FHS, which specifies what the main directory should be, and what their purposes are. Most Linux distributions try to respect the FHS, but none of them follow it exactly. One reason being, that as new requirements develop, people sometimes make changes, and it takes time for that to migrate into the FHS, and be respected by other distributions as well.

Here is a list of the main directories which should be present under **/**:

## Main Directories

| Directory  | In FHS? | Purpose                                                      |
| :--------- | :------ | :----------------------------------------------------------- |
| **/**      | Yes     | Primary directory of the entire filesystem hierarchy         |
| **/bin**   | Yes     | Essential executable programs that must be available in single user mode |
| **/boot**  | Yes     | Files needed to boot the system, such as the kernel, initrd or initramfs images, and boot configuration files and bootloader programs |
| **/dev**   | Yes     | **Device Nodes**, used to interact with hardware and software devices |
| **/etc**   | Yes     | System-wide configuration files                              |
| **/home**  | Yes     | User home directories, including personal settings, files, etc. |
| **/lib**   | Yes     | Libraries required by executable binaries in **/bin** and **/sbin** |
| **/lib64** | No      | 64-bit libraries required by executable binaries in **/bin** and **/sbin**, for systems which can run both 32-bit and 64-bit programs |
| **/media** | Yes     | Mount points for removable media such as CD’s, DVD’s, USB sticks, etc. |
| **/mnt**   | Yes     | Temporarily mounted filesystems                              |
| **/opt**   | Yes     | Optional application software packages                       |
| **/proc**  | Yes     | Virtual pseudo-filesystem giving information about the system and processes running on it; can be used to alter system parameters |
| **/run**   | Yes     | System information data describing the system since it was booted; should be cleared at every reboot |
| **/sys**   | No      | Virtual pseudo-filesystem giving information about the system and processes running on it; can be used to alter system parameters, is similar to a device tree and is part of the Unified Device Model |
| **/root**  | Yes     | Home directory for the root user                             |
| **/sbin**  | Yes     | Essential system binaries                                    |
| **/srv**   | Yes     | Site-specific data served up by the system; seldom used      |
| **/tmp**   | Yes     | Temporary files; on many distributions lost across a reboot and may be a ramdisk in memory |
| **/usr**   | Yes     | Multi-user applications, utilities and data; theoretically read-only |
| **/var**   | Yes     | Variable data that changes during system operation           |



A system should be able to boot and go into single user, or recovery mode, with only the **/bin**, **/sbin**, **/etc**, **/lib** and **/root** directories mounted, while the contents of the **/boot** directory are needed for the system to boot in the first place.

Many of these directories (such as **/etc** and **/lib**) will generally have subdirectories associated either with specific applications or sub-systems, with the exact layout differing somewhat by Linux distribution. Two of them, **/usr** and **/var**, are relatively standardized and worth looking at.

## Directories Under /usr

| Directory        | Purpose                                                      |
| :--------------- | :----------------------------------------------------------- |
| **/usr/bin**     | Non-essential binaries and scripts, not needed for single user mode; generally this means user applications not needed to start system |
| **/usr/include** | Header files used to compile applications                    |
| **/usr/lib**     | Libraries for programs in **/usr/bin** and **/usr/sbin**     |
| **/usr/lib64**   | 64-bit libraries for 64-bit programs in **/usr/bin** and **/usr/sbin** |
| **/usr/sbin**    | Non-essential system binaries, such as system daemons        |
| **/usr/share**   | Shared data used by applications, generally architecture-independent |
| **/usr/src**     | Source code, usually for the Linux kernel                    |
| **/usr/X11R6**   | X Window files; generally obsolete                           |
| **/usr/local**   | Local data and programs specific to the host; subdirectories include **bin**, **sbin**, **lib**, **share**, **include**, etc. |

## Directories Under /var

| Directory      | Purpose                                                      |
| :------------- | :----------------------------------------------------------- |
| **/var/lib**   | Persistent data modified by programs as they run             |
| **/var/lock**  | Lock files used to control simultaneous access to resources  |
| **/var/log**   | Log files                                                    |
| **/var/mail**  | User mailboxes                                               |
| **/var/run**   | Information about the running system since the last boot     |
| **/var/spool** | Tasks spooled or waiting to be processed, such as print queues |
| **/var/tmp**   | Temporary files to be preserved across system reboot; sometimes linked to **/tmp** |
| **/var/www**   | Root for website hierarchies                                 |