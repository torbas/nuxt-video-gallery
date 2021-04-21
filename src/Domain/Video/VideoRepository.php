<?php
declare(strict_types=1);

namespace App\Domain\Video;

interface VideoRepository
{
    /**
     * @return User[]
     */
    public function findAll(): array;

    /**
     * @param int $id
     * @return User
     * @throws UserNotFoundException
     */
    public function findVideoOfId(int $id): Video;
}
