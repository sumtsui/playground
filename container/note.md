# Complete intro to container (FM course)

Course link:

https://frontendmasters.com/courses/complete-intro-containers/

https://btholt.github.io/complete-intro-to-containers

Start up a Ubuntu VM using docker:

```docker
docker run -it --name docker-host --rm --privileged ubuntu:bionic
```

While inside the VM, check the version of Ubuntu:

```bash
cat /etc/issue
```

## `chroot`

A Linux command that allows you to set the root directory of a new process.

```bash
chroot /my-new-root bash
```

## `unshare`

Run a program with some namespaces unshared from the parent.

## debootstrap

```bash
# install debootstrap
apt-get update -y
apt-get install debootstrap -y
debootstrap --variant=minbase bionic /better-root

# head into the new namespace'd, chroot'd environment
unshare --mount --uts --ipc --net --pid --fork --user --map-root-user chroot /better-root bash # this also chroot's for us
mount -t proc none /proc # process namespace
mount -t sysfs none /sys # filesystem
mount -t tmpfs none /tmp # filesystem
```
