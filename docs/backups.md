# Backups

Backups are in the `dbbackups` folder. These are backed up to Syncthing on asterix and berlix.

## Database

Use the following command to create a backup of the database:

```sh
cd __project_root__
pg_dump -h localhost -p 5432 -U bias180 -W -F p -c bias180 > \
   dbbackups/20240218/bias180_with_post_versions.sql
```

The `-c` flag adds commands to drop prior.

*Note the use of the current date in the path.*

# Media

Use the following command to Zip all the media files:

```sh
cd __project_root__
zip -r dbbackups/20240218/media.zip payload-cms/dist/media
```

*Note the use of the current date in the path.*

## Using rsync to backup the folder

```sh
rsync -arvz --delete --progress bias180/dbbackups ~/Sync/replica/bias-180
```
